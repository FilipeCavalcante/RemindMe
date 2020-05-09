import {
    CreatePayableDto,
    ICreatePayableDto,
    IPayableDto,
    PayableDto,
} from '@models/payables.model';
import { save, retrieve, saveMultiple, remove, udpate, retrieveBy } from '@gateways/gateway';
import { GatewayConstants } from '@shared/keyConstants';
import { SortType } from '@shared/enums/sortType.enum';
import { MonthNames } from '@shared/date.utils';

export function updatePayable(itemId: number | any, data: IPayableDto, callback?: any) {
    udpate(GatewayConstants.payableKeyName, itemId, data).then(callback);
}

export function savePayable(entity: ICreatePayableDto) {
    if (entity) {
        if (entity.repeat && entity.quantityRepeat && entity.quantityRepeat > 0) {
            const entities = defineMultiplePayables(entity);
            saveMultiple(GatewayConstants.payableKeyName, [
                entity,
                ...entities,
            ]).then((result) => { });
        } else {
            save(GatewayConstants.payableKeyName, entity).then((result) => { });
        }
    }
}

export async function retrievePayableBy(itemId: string | any): Promise<IPayableDto> {
    var response = await retrieveBy(GatewayConstants.payableKeyName, itemId);
    return PayableDto.fromJS(response);
}

export async function retrievePayables(
    initial = 0,
    top?: number,
): Promise<IPayableDto[]> {
    const response = await retrieve(GatewayConstants.payableKeyName);
    let result = parseList(response);
    result = result.filter(item => {
        return !item.isPaid
    });
    return result.slice(initial, top);
}

export async function markPayableAsPaid(item: IPayableDto, isPaid: boolean) {
    item.isPaid = isPaid;
    item.paidAt = new Date();
    await udpate(GatewayConstants.payableKeyName, item.id, item);
}

export async function deletePayable(itemId: string, callback?: any) {
    await remove(GatewayConstants.payableKeyName, itemId, callback);
}

function parseList(data: any): IPayableDto[] {
    if (!Array.isArray(data)) return [];

    if (data.length === 0) return [];

    const result: IPayableDto[] = [];

    data.map((item) => result.push(PayableDto.fromJS(item)));

    return result;
}

function defineMultiplePayables(data: ICreatePayableDto) {
    const multiples: ICreatePayableDto[] = [];

    const repeatCount = Number(data.quantityRepeat || 1);
    for (let c = 1; c <= repeatCount; c++) {
        const next = CreatePayableDto.clone(data);
        next.barCode = '';
        next.dueDate = new Date(
            next.dueDate?.setMonth(next.dueDate.getMonth() + c),
        );
        next.title = `${next.title} (${MonthNames[next.dueDate?.getMonth() || 0]}-${next.dueDate?.getFullYear()})`;
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
                }
                return a[columnName] > b[columnName] ? 1 : -1;
            }
            case SortType.Date: {
                if (sortOrder?.toLowerCase() === 'desc') {
                    return new Date(a[columnName]) < new Date(b[columnName])
                        ? 1
                        : -1;
                }
                return new Date(a[columnName]) > new Date(b[columnName])
                    ? 1
                    : -1;
            }
            default:
                return 0;
        }
    });
}
