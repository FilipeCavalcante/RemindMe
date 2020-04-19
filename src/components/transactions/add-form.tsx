import React, { useState } from 'react';
import DatePicker from 'react-native-datepicker';
import TextInputMask from 'react-native-text-input-mask';
import { Formik } from 'formik';
import { FormContainer, Label, FieldLabel, SaveButton, CancelButton, TextCancelButton, formStyle, TextSaveButton, InputText, GroupControls, Controls } from '@components/transactions/forms.styled';
import { ICreateTransactionModel, createEntityInitialValues } from '@models/transactions.model';
import { ActivityIndicator, Alert, TextInput, View, Button, Text, CheckBox } from 'react-native';
import { saveTransaction } from '@services/transaction.service';

export default function AddTransactionForm(props: any) {
    const [isLoading, setLoadingState] = useState(false);

    function goBack() {
        props.cancelForm('form cancelado');
    }

    function submitForm(values: ICreateTransactionModel) {
        setLoadingState(true);
        try {
            saveTransaction(values)
            Alert.alert("Items salvos com sucesso");
            goBack();
        }
        catch (error) {
            Alert.alert(error);
        }
        finally {
            setLoadingState(false);
        }
    }

    return (
        <Formik initialValues={createEntityInitialValues} onSubmit={values => submitForm(values)}>
            {({ handleChange, handleSubmit, values }) => (
                <>
                    {isLoading && <ActivityIndicator />}
                    <FormContainer>
                        <Label>
                            <FieldLabel>Titulo</FieldLabel>
                            <InputText value={values.title} onChange={handleChange('title')} />
                        </Label>
                        <Label>
                            <FieldLabel>Value</FieldLabel>
                            <TextInputMask style={formStyle.inputControl} onChangeText={handleChange('value')} mask={"R$ [999999],[99]"} keyboardType={'numeric'} />
                        </Label>
                        <Label>
                            <FieldLabel>Bar code</FieldLabel>
                            <InputText value={values.barCode} onChange={handleChange('barCode')} keyboardType={'numeric'} />
                        </Label>
                        <Label>
                            <FieldLabel>Due date</FieldLabel>
                            <DatePicker date={values.dueDate} mode="date" onDateChange={handleChange('dueDate')} style={formStyle.inputControl}
                                customStyles={{ dateInput: { borderWidth: 0 }, dateText: { fontSize: 18, alignSelf: 'flex-start' } }} />
                        </Label>
                        <GroupControls>
                            <Controls>
                                <Label>
                                    <FieldLabel>Stalments</FieldLabel>
                                    <CheckBox value={values.stalments} style={formStyle.checkboxControl} />
                                </Label>
                            </Controls>
                            <Controls>
                                <Label>
                                    <FieldLabel>Stalments Quantity</FieldLabel>
                                    <InputText value={values.stalmentsQuantity?.toString()} onChange={handleChange('stalmentsQuantity')} keyboardType={'numeric'} />
                                </Label>
                            </Controls>
                        </GroupControls>
                        <View style={{ flex: 1, marginTop: 40 }}>
                            <SaveButton onPress={handleSubmit}>
                                <TextSaveButton>Salvar</TextSaveButton>
                            </SaveButton>
                            <CancelButton onPress={goBack}>
                                <TextCancelButton>Cancelar</TextCancelButton>
                            </CancelButton>
                        </View>
                    </FormContainer>
                </>
            )}
        </Formik>
    )
}
