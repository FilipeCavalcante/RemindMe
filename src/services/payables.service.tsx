import { ICreatePayableDto } from '@models/payables.model';
import { save, retrieve } from '@gateways/gateway';
import { GatewayConstants } from '@shared/keyConstants';


export function savePayable(entity: ICreatePayableDto) {
    if (entity) {
        save(GatewayConstants.payableKeyName, entity);
    }
}

export async function retrievePayables() {
    let response = await retrieve(GatewayConstants.payableKeyName);
    return response;
}