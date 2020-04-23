import {
    ICreatePayableDto,
    IPayableDto,
    PayableDto,
} from '@models/payables.model';
import { save, retrieve } from '@gateways/gateway';
import { GatewayConstants } from '@shared/keyConstants';

export function savePayable(entity: ICreatePayableDto) {
    if (entity) {
        save(GatewayConstants.payableKeyName, entity);
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
