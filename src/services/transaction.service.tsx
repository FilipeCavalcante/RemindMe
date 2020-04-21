import { ICreateTransactionModel } from '@models/transactions.model';
import { save, retrieve } from '@gateways/gateway';
import { GatewayConstants } from '@shared/keyConstants';


export function saveTransaction(entity: ICreateTransactionModel) {
    if (entity) {
        save(GatewayConstants.transactionsKeyName, entity);
    }
}

export async function listTransactions() {
    let response = await retrieve(GatewayConstants.transactionsKeyName);
    return response;
}