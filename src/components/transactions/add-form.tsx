import React from 'react';
import { withFormik, Formik } from 'formik';
import { FormContainer, Label, FieldLabel, TextField } from '@assets/css/forms.styled';
import { INewTransaction } from '@models/NewTransaction-model';

const AddTransactionForm = (props: any) => {

    return (
        <FormContainer>
            <Label>
                <FieldLabel>Title</FieldLabel>
                <TextField value={props.values.title} onChangeText={(text: any) => props.setFieldValue('title', text)} />
            </Label>
            <Label>
                <FieldLabel>Value</FieldLabel>
                <TextField value={props.values.value} onChangeText={(text: any) => props.setFieldValue('value', text)} />
            </Label>
        </FormContainer>

        // <View>
        //     <TextInput style={styles.formControl} value={props.values.title} onChangeText={text => props.setFieldValue('title', text)} />
        //     <TextInput style={styles.formControl} value={props.values.value} onChangeText={text => props.setFieldValue('value', text)} />
        //     <Button onPress={props.handleSubmit} title="Submit" />
        // </View>
    )
}

export const Transaction_AddForm = withFormik<INewTransaction, INewTransaction>({
    mapPropsToValues: (props) => {
        return {
            title: props.title || '',
            value: props.value || '00',
        }
    },

    handleSubmit: (values) => {
        console.debug(values);
    }
})(AddTransactionForm);