import { parseToCurrency } from '@shared/number.utils';

export interface ICreatePayableDto {
    title: string | undefined;
    value: string | undefined;
    barCode?: string | undefined;
    dueDate: Date | undefined;
    repeat: boolean | undefined;
    quantityRepeat: number | undefined;
    isGovernamental: boolean | undefined;
}

export interface IPayableDto {
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
};

export class PayableDto implements IPayableDto {
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

    constructor() {}

    init(data?: any) {
        if (data) {
            this.title = data['title'];
            this.barCode = data['barCode'];
            this.id = data['id'];
            this.createdAt = new Date(data['createdAt']) || null;
            this.createdBy = '-1';
            this.dueDate = data['dueDate'];
            this.overdue = data['overdue'] || false;
            this.paymentDate = new Date(data['paymentDate']) || null;
            this.repeat = data['repeat'];
            this.quantityRepeat = data['repeatQuantity'];
            this.updatedAt = new Date(data['updatedAt']) || null;
            this.updatedBy = '-1';
            this.value = data['value'];
        }
    }

    static fromJS(data: any): IPayableDto {
        data = typeof data === 'object' ? data : {};
        const result = new PayableDto();
        result.init(data);
        return result;
    }
}
