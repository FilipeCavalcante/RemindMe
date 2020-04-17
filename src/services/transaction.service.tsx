import { ICreateTransactionModel } from '@models/transactions.model';

export const saveTransaction = (entity: ICreateTransactionModel) => console.debug(["saving", entity]);