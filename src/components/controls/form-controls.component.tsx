import React from 'react';
import TextInputMask from 'react-native-text-input-mask';
import DatePicker from 'react-native-datepicker';

import { formStyle, FieldGroup, FieldLabel, InputText, Label, Button, TextButton } from './form-controls.styles';
import { CheckBox } from 'react-native';


interface IButtonProperties {
    label: string,
    onPress: any,
    primary?: boolean,
    isDisabled?: boolean
}

interface IInputWithLabelProperties {
    label?: string,
    value: any,
    handleChange: any,
    placeholder?: string,
    keyboardType?: any
}

interface IInputMaskProperties extends IInputWithLabelProperties {
    mask: any
}

interface IInputDatePickerProperties extends IInputWithLabelProperties {
    mode: any
}

export const InputWithLabel = ({ label, value, handleChange, placeholder, keyboardType }: IInputWithLabelProperties) => {
    return (
        <FieldGroup>
            {label && label !== '' &&
                <Label>
                    <FieldLabel>{label}</FieldLabel>
                </Label>
            }
            <InputText value={value} onChangeText={handleChange} placeholder={placeholder} keyboardType={keyboardType} />
        </FieldGroup>
    )
}

export const InputMask = ({ label, value, handleChange, placeholder, mask }: IInputMaskProperties) => {
    return (
        <FieldGroup>
            {label !== '' &&
                <Label>
                    <FieldLabel>{label}</FieldLabel>
                </Label>
            }
            <TextInputMask style={formStyle.inputControl} placeholder={placeholder} onChangeText={handleChange} mask={mask} keyboardType={'numeric'} />
        </FieldGroup>
    )
}

export const InputDatePicker = ({ label, value, mode, handleChange }: IInputDatePickerProperties) => {
    return (
        <FieldGroup>
            {label && label !== '' &&
                <Label>
                    <FieldLabel>{label}</FieldLabel>
                </Label>
            }
            <DatePicker date={value} mode={mode} onDateChange={handleChange} style={formStyle.inputControl}
                customStyles={{ dateInput: { borderWidth: 0 }, dateText: { fontSize: 18, alignSelf: 'flex-start' } }} />
        </FieldGroup>
    )
}

export const CheckboxInput = ({ label, value, handleChange }: any) => {
    return (
        <FieldGroup>
            {label && label !== '' &&
                <Label>
                    <FieldLabel>{label}</FieldLabel>
                </Label>
            }
            <CheckBox value={value} style={formStyle.checkboxControl} onValueChange={handleChange} />
        </FieldGroup>
    )
}

export const FormButton = ({ label, onPress, isDisabled, primary = false }: IButtonProperties) => {
    return (
        <Button onPress={onPress} btnPrimary={primary}>
            <TextButton btnPrimary={primary}>{label}</TextButton>
        </Button>
    )
}