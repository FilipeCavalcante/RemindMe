export interface ICreateTransactionModel {
    title: string | undefined;
    value: string | undefined;
    barCode?: string | undefined;
    dueDate: Date | undefined;
    repeat: boolean | undefined;
    quantityRepeat: number | undefined;
    isGovernamental: boolean | undefined;
}

export interface ITransactionModel {
    id: number | undefined;
    title: string | undefined;
    value: string | undefined;
    barCode: string | undefined;
    dueDate: Date | undefined;
    repeat: boolean | undefined;
    quantityRepeat: number | undefined;
    createdAt: Date | undefined;
    createdBy: string | undefined;
    updatedAt: Date | undefined;
    updatedBy: string | undefined;
    paymentDate?: Date | undefined;
    overdue?: Boolean | undefined;
}


//Initial Values;
export const createEntityInitialValues = {
    title: '',
    barCode: '',
    dueDate: new Date(),
    repeat: false,
    quantityRepeat: 1,
    value: '0,00',
}