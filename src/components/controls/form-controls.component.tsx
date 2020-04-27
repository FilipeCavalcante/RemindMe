import React, { useEffect, useState } from 'react';
import TextInputMask from 'react-native-text-input-mask';
import DatePicker from 'react-native-datepicker';

import {
    formStyle,
    FieldGroup,
    FieldLabel,
    InputText,
    Label,
    Button,
    TextButton,
} from './form-controls.styles';
import { CheckBox } from 'react-native-elements';

interface IButtonProperties {
    label: string;
    onPress: any;
    primary?: boolean;
    isDisabled?: boolean;
}

interface IInputWithLabelProperties {
    label?: string;
    value: any;
    handleChange: any;
    placeholder?: string;
    keyboardType?: any;
}

interface IInputMaskProperties extends IInputWithLabelProperties {
    mask: any;
}

interface IInputDatePickerProperties extends IInputWithLabelProperties {
    mode: any;
}

export const InputWithLabel = ({
    label,
    value,
    handleChange,
    placeholder,
    keyboardType,
}: IInputWithLabelProperties) => {
    return (
        <FieldGroup>
            { label && label !== '' && (
                <Label>
                    <FieldLabel>{ label }</FieldLabel>
                </Label>
            ) }
            <InputText
                value={ value }
                onChangeText={ handleChange }
                placeholder={ placeholder }
                keyboardType={ keyboardType }
            />
        </FieldGroup>
    );
};

export const InputMask = ({
    label,
    value,
    handleChange,
    placeholder,
    mask,
}: IInputMaskProperties) => {
    return (
        <FieldGroup>
            { label !== '' && (
                <Label>
                    <FieldLabel>{ label }</FieldLabel>
                </Label>
            ) }
            <TextInputMask
                style={ formStyle.inputControl }
                placeholder={ placeholder }
                onChangeText={ handleChange }
                mask={ mask }
                keyboardType={ 'numeric' }
            />
        </FieldGroup>
    );
};

export const InputDatePicker = ({
    label,
    value,
    mode,
    handleChange,
}: IInputDatePickerProperties) => {
    return (
        <FieldGroup>
            { label && label !== '' && (
                <Label>
                    <FieldLabel>{ label }</FieldLabel>
                </Label>
            ) }
            <DatePicker
                date={ value }
                mode={ mode }
                onDateChange={ handleChange }
                style={ formStyle.inputControl }
                customStyles={ {
                    dateInput: { borderWidth: 0 },
                    dateText: {
                        fontSize: 14,
                        alignSelf: 'flex-start',
                        marginLeft: 4,
                    },
                } }
            />
        </FieldGroup>
    );
};

export const CheckboxInput = ({ label, value, fieldName, setFieldValue }: any) => {
    const [ _checked, setChecked ] = useState(value);
    useEffect(() => {
        setFieldValue(fieldName, _checked)
    }, [ _checked ]);
    return (
        <FieldGroup>
            <CheckBox
                checked={ _checked }
                title={ label }
                size={ 20 }
                onPress={ () => {
                    setChecked(!_checked);
                } }
                titleProps={ { adjustsFontSizeToFit: true } }
                containerStyle={ { borderWidth: 0, marginLeft: -6 } }
            />
        </FieldGroup>
    );
};

export const FormButton = ({
    label,
    onPress,
    isDisabled,
    primary = false,
}: IButtonProperties) => {
    return (
        <Button onPress={ onPress } btnPrimary={ primary }>
            <TextButton btnPrimary={ primary }>{ label }</TextButton>
        </Button>
    );
};
