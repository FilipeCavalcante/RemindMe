import styled from 'styled-components/native';
import { DefaultColors } from '@assets/css/global';
import { StyleSheet } from 'react-native';

export const formStyle = StyleSheet.create({
    inputControl: {
        borderColor: DefaultColors.color1,
        borderWidth: 1,
        width: '100%',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        backgroundColor: '#FFF',
    },

    button: {
        padding: 20,
        alignSelf: 'center',
    },

    checkboxControl: {},
});

export const FieldGroup = styled.View`
    flex: 1;
    margin-bottom: 16px;
`;

export const FieldLabel = styled.Text`
    color: ${DefaultColors.color3};
    font-size: 18px;
    margin-bottom: 4px;
`;

export const Label = styled.View``;

export const InputText = styled.TextInput`
    border-color: ${DefaultColors.color2};
    background-color: #fff;
    border-width: 1px;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 300px;
    align-self: center;
    bottom: 10px;
    height: 60px;
    border: 1px solid ${DefaultColors.color5};
    border-radius: 10px;
    margin: 10px;
    background-color: ${(props) =>
        props.btnPrimary ? DefaultColors.color5 : DefaultColors.background};
`;

export const TextButton = styled.Text`
    font-size: 16px;
    color: ${(props) => (props.btnPrimary ? '#fff' : DefaultColors.color5)};
`;
