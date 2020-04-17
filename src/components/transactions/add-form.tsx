import React from 'react';
import { withFormik, Formik } from 'formik';
import { FormContainer, Label, FieldLabel, SaveButton, formStyle } from '@components/transactions/forms.styled';
import { ICreateTransactionModel } from '@models/transactions.model';
import { Alert, TextInput, View, Button, Text, CheckBox } from 'react-native';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';

export default function AddTransactionForm() {

    const initialValues: ICreateTransactionModel = {
        title: '',
        barCode: '',
        dueDate: new Date(),
        stalments: false,
        stalmentsQuantity: 1,
        value: '0,00',
    }

    function submitForm(entity: ICreateTransactionModel) {
    }

    return (
        <Formik initialValues={initialValues} onSubmit={() => Alert.alert("TESTING")}>
            {({ handleChange, handleSubmit, values }) => (
                <>
                    <FormContainer>
                        <Label>
                            <FieldLabel>Titulo</FieldLabel>
                            <TextInput value={values.title} style={formStyle.inputControl} onChange={handleChange('title')} />
                        </Label>
                        <Label>
                            <FieldLabel>Value</FieldLabel>
                            <TextInput value={values.value} style={formStyle.inputControl} onChange={handleChange('value')} />
                        </Label>
                        <Label>
                            <FieldLabel>Bar code</FieldLabel>
                            <TextInput value={values.barCode} style={formStyle.inputControl} onChange={handleChange('barCode')} />
                        </Label>
                        <Label>
                            <FieldLabel>Due date</FieldLabel>
                            <TextInput value={values.dueDate?.toLocaleDateString()} style={formStyle.inputControl} onChange={handleChange('dueDate')} />
                        </Label>
                        <Label>
                            <FieldLabel>Stalments</FieldLabel>
                            <CheckBox value={values.stalments} style={formStyle.checkboxControl} />
                        </Label>
                        <Label>
                            <FieldLabel>Stalments Quantity</FieldLabel>
                            <TextInput value={values.stalmentsQuantity?.toString()} style={formStyle.inputControl} />
                        </Label>
                        <View style={{ flex: 1, marginTop: 40 }}>
                            <SaveButton onPress={handleSubmit}>
                                <Text>Salvar</Text>
                            </SaveButton>
                        </View>
                    </FormContainer>
                </>
            )}
        </Formik>
    )
}
