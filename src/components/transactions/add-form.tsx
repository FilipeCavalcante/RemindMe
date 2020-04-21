import React, { useState } from 'react';
import { Formik } from 'formik';
import { FormContainer, ButtonArea } from '@components/transactions/forms.styled';
import { createEntityInitialValues } from '@models/transactions.model';
import { ActivityIndicator } from 'react-native';
import { saveTransaction } from '@services/transaction.service';
import { InputWithLabel, InputMask, InputDatePicker, CheckboxInput, FormButton } from '@components/controls/form-controls.component';

export default function AddTransactionForm(props: any) {
    const [isLoading, setLoadingState] = useState(false);

    function goBack() {
        props.cancelForm('form cancelado');
    }

    const onSubmit = (values: any) => {
        setLoadingState(true);
        saveTransaction(values);
        setTimeout(() => {
            setLoadingState(false);
            goBack();
        }, 3000);
    }

    return (

        <Formik initialValues={createEntityInitialValues} onSubmit={values => onSubmit(values)} >
            {({ values, handleChange, handleSubmit }) => (
                <>
                    {isLoading && <ActivityIndicator />}
                    <FormContainer>
                        <InputWithLabel value={values.title} label="Titulo" handleChange={handleChange('title')} placeholder="título" />
                        <InputWithLabel value={values.barCode} label="Código de Barra" handleChange={handleChange('barCode')} placeholder="código de barra"
                            keyboardType={'numeric'} />
                        <InputMask label="Valor" placeholder="valor do boleto" handleChange={handleChange('value')} value={values.value} mask={"[999999],[99]"} />
                        <InputDatePicker label="Vencimento" value={values.dueDate} mode="date" handleChange={handleChange('dueDate')} />
                        <CheckboxInput label="Repetir?" value={values.repeat} handleChange={handleChange('repeat')} />
                        <InputMask label="Número Repetições" placeholder="repetir quantas vezes" value={values.quantityRepeat} handleChange={handleChange('quantityRepeat')}
                            mask={"[999]"} />

                        <ButtonArea>
                            <FormButton onPress={handleSubmit} label="Salvar" primary={true} />
                            <FormButton onPress={goBack} label="Cancelar" />
                        </ButtonArea>
                    </FormContainer>
                </>
            )}
        </Formik>
    )
}
