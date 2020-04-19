export interface ICreateTransactionModel {
    title: string | undefined;
    value: string | undefined;
    barCode: string | undefined;
    dueDate: Date | undefined;
    stalments: boolean | undefined;
    stalmentsQuantity: number | undefined;
}

export interface ITransactionModel {
    id: number | undefined;
    title: string | undefined;
    value: string | undefined;
    barCode: string | undefined;
    dueDate: Date | undefined;
    stalments: boolean | undefined;
    stalmentsQuantity: number | undefined;
    createdAt: Date | undefined;
    createdBy: string | undefined;
    updatedAt: Date | undefined;
    updatedBy: string | undefined;
}


//Initial Values;
export const createEntityInitialValues: ICreateTransactionModel = {
    title: '',
    barCode: '',
    dueDate: new Date(),
    stalments: false,
    stalmentsQuantity: 1,
    value: '0,00',
}