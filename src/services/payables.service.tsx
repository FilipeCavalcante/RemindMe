import {
    CreatePayableDto,
    ICreatePayableDto,
    IPayableDto,
    PayableDto,
} from '@models/payables.model';
import { save, retrieve, saveMultiple } from '@gateways/gateway';
import { GatewayConstants } from '@shared/keyConstants';
import { SortType } from '@shared/enums/sortType.enum';
import { MonthNames } from '@shared/date.utils';

export function savePayable(entity: ICreatePayableDto) {
    if (entity) {
        if (
            entity.repeat &&
            entity.quantityRepeat &&
            entity.quantityRepeat > 0
        ) {
            const entities = defineMultiplePayables(entity);
            saveMultiple(GatewayConstants.payableKeyName, [
                entity,
                ...entities,
            ]).then((result) => {});
        } else {
            save(GatewayConstants.payableKeyName, entity).then((result) => {});
        }
    }
}

export async function retrievePayables(
    initial = 0,
    top?: number,
): Promise<IPayableDto[]> {
    let response = await retrieve(GatewayConstants.payableKeyName);
    let result = parseList(response);
    return result.slice(initial, top);
}

function parseList(data: any): IPayableDto[] {
    if (!Array.isArray(data)) return [];

    if (data.length === 0) return [];

    let result: IPayableDto[] = [];

    data.map((item) => result.push(PayableDto.fromJS(item)));

    return result;
}

function defineMultiplePayables(data: ICreatePayableDto) {
    let multiples: ICreatePayableDto[] = [];

    let repeatCount = Number(data.quantityRepeat || 1);
    for (let c = 1; c <= repeatCount; c++) {
        let next = CreatePayableDto.clone(data);
        next.barCode = '';
        next.dueDate = new Date(
            next.dueDate?.setMonth(next.dueDate.getMonth() + c),
        );
        next.title =
            next.title +
            ` (${
                MonthNames[next.dueDate?.getMonth() || 0]
            }-${next.dueDate?.getFullYear()})`;
        multiples.push(next);
    }

    return multiples;
}

export function sortPayableBy(
    data: IPayableDto[],
    type: SortType,
    columnName: string,
    sortOrder?: string,
): IPayableDto[] {
    return data.sort((a, b) => {
        switch (type) {
            case SortType.String: {
                if (sortOrder?.toLowerCase() === 'desc') {
                    return a[columnName] < b[columnName] ? 1 : -1;
                } else {
                    return a[columnName] > b[columnName] ? 1 : -1;
                }
            }
            case SortType.Date: {
                if (sortOrder?.toLowerCase() === 'desc') {
                    return new Date(a[columnName]) < new Date(b[columnName])
                        ? 1
                        : -1;
                } else {
                    return new Date(a[columnName]) > new Date(b[columnName])
                        ? 1
                        : -1;
                }
            }
            default:
                return 0;
        }
    });
}
