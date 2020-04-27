import {
    CreatePayableDto,
    ICreatePayableDto,
    IPayableDto,
    PayableDto,
} from '@models/payables.model';
import { save, retrieve, saveMultiple } from '@gateways/gateway';
import { GatewayConstants } from '@shared/keyConstants';

export function savePayable(entity: ICreatePayableDto) {
    if (entity) {
        if (entity.repeat && entity.quantityRepeat && entity.quantityRepeat > 0) {
            const entities = defineMultiplePayables(entity);
            saveMultiple(GatewayConstants.payableKeyName, [ entity, ...entities ]).then((result) => {
            })
        } else {
            save(GatewayConstants.payableKeyName, entity).then((result) => {
            })
        }
    }
}

export async function retrievePayables(): Promise<IPayableDto[]> {
    let response = await retrieve(GatewayConstants.payableKeyName);
    let result = parseList(response);
    return response;
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
        next.dueDate = new Date(next.dueDate?.setMonth(next.dueDate?.getMonth() + c));
        multiples.push(next);
    }

    return multiples;
}
