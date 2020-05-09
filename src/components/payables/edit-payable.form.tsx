import React, { useState } from 'react';
import { Formik } from 'formik';
import {
    FormContainer,
    ButtonArea,
} from '@components/payables/payable.forms.styled';
import {
    CreatePayableDto, IPayableDto,
} from '@models/payables.model';
import { savePayable, updatePayable } from '@services/payables.service';
import {
    InputWithLabel,
    InputMask,
    InputDatePicker,
    CheckboxInput,
    FormButton,
} from '@components/controls/form-controls.component';
import { LoadingIndicator } from '@components/controls/indicators.component';

export default function EditPayableForm(props: any) {
    const [isLoading, setLoadingState] = useState(false);

    const cancel = () => {
        goToPayables();
    }

    const goToPayables = () => {
        props.submitForm();
    }

    const onSubmit = (values: IPayableDto) => {
        setTimeout(() => {
            const entity = new CreatePayableDto(values);
            updatePayable(values.id, values)
            setLoadingState(false);
            goToPayables();
        }, 2000);
    };

    return (
        <Formik
            initialValues={props.data}
            enableReinitialize={true}
            onSubmit={(values) => onSubmit(values)}
        >
            {({ values, handleChange, handleSubmit, setFieldValue }) => (
                <>
                    <LoadingIndicator isVisible={isLoading} size={60} />
                    <FormContainer>
                        <InputWithLabel
                            value={values.title}
                            label='Titulo'
                            handleChange={handleChange('title')}
                            placeholder='título'
                        />
                        <InputWithLabel
                            value={values.barCode}
                            label='Código de Barra'
                            handleChange={handleChange('barCode')}
                            placeholder='código de barra'
                            keyboardType={'numeric'}
                        />
                        <InputMask
                            label='Valor'
                            placeholder='valor do boleto'
                            handleChange={handleChange('value')}
                            value={values.value}
                            mask={'[999999],[99]'}
                        />
                        <InputDatePicker
                            label='Vencimento'
                            value={values.dueDate}
                            mode='date'
                            handleChange={handleChange('dueDate')}
                        />

                        <ButtonArea>
                            <FormButton
                                onPress={handleSubmit}
                                label='Salvar'
                                primary={true}
                            />
                            <FormButton onPress={cancel} label='Cancelar' />
                        </ButtonArea>
                    </FormContainer>
                </>
            )}
        </Formik>
    );
}
