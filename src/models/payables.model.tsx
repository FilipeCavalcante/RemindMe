import { parseToCurrency } from '@shared/number.utils';

export interface IGroupPayableDto {
    monthName: string;
    entries: IPayableDto[];
}

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
    id: string;
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
    paidAt?: Date | undefined;
    isPaid?: Boolean | undefined;
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

export class CreatePayableDto implements ICreatePayableDto {
    barCode: string | undefined;
    dueDate: Date | undefined;
    isGovernamental: boolean | undefined;
    quantityRepeat: number | undefined;
    repeat: boolean | undefined;
    title: string | undefined;
    value: string | undefined;

    constructor(data?: any) {
        this.init(data);
    }

    init(data?: any) {
        if (data) {
            this.title = data.title;
            this.barCode = data.barCode;
            this.dueDate = new Date(data.dueDate);
            this.repeat = data.repeat;
            this.quantityRepeat = data.quantityRepeat;
            this.value = data.value;
        }
    }

    static clone(data: any): ICreatePayableDto {
        data = typeof data === 'object' ? data : {};
        const result = new CreatePayableDto();
        result.init(data);
        return result;
    }
}

export class PayableDto implements IPayableDto {
    id: string = '';
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
    paidAt?: Date | undefined;
    isPaid?: Boolean | undefined;

    constructor() { }

    init(data?: any) {
        if (data) {
            this.title = data.title;
            this.barCode = data.barCode;
            this.id = data.id;
            this.createdAt = new Date(data.createdAt) || null;
            this.createdBy = '-1';
            this.dueDate = new Date(data.dueDate);
            this.isPaid = data.isPaid || false;
            this.paidAt = new Date(data.paidAt) || null;
            this.repeat = data.repeat;
            this.quantityRepeat = data.quantityRepeat;
            this.updatedAt = new Date(data.updatedAt) || null;
            this.updatedBy = '-1';
            this.value = parseToCurrency(data.value, 2);
        }
    }

    static fromJS(data: any): IPayableDto {
        data = typeof data === 'object' ? data : {};
        const result = new PayableDto();
        result.init(data);
        return result;
    }
}
