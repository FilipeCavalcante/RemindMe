import styled from 'styled-components/native';
import { DefaultColors } from '@assets/css/global';
import { StyleSheet } from 'react-native';


export const FormContainer = styled.View`
    margin: 20px;
`;

export const Label = styled.View`
    margin: 14px;
`;

export const FieldLabel = styled.Text`
    color: ${DefaultColors.color3};
    font-size: 18px;
    margin-bottom: 4px;
`;

export const GroupControls = styled.View`
    flex: 1;
    width: 100%;
`;

export const Controls = styled.View`
    flex: ${props => props.flexValue || 1};
    flex-direction: row;
`;

export const InputText = styled.TextInput`
        border-color: ${DefaultColors.color2};
        background-color: #fff;
        border-width: 1px;
        border-radius: 4px;
        padding-left: 20px;
`;

export const SaveButton = styled.TouchableOpacity`
    border-width: 0px;
    align-items: center;
    justify-content: center;
    width: 200px;
    align-self: center;
    bottom: 10px;
    height: 60px;
    background-color: ${DefaultColors.color5};
    border-radius: 4px;
    z-index: 10;
    /* elevation: 5; */
    left: 10px;
    margin: 10px;
`;

export const CancelButton = styled(SaveButton)``;

export const TextSaveButton = styled.Text`
    color: #fff;
    font-size: 18px;
`;

export const TextCancelButton = styled(TextSaveButton)``;

export const formStyle = StyleSheet.create({
    inputControl: {
        borderColor: DefaultColors.color2,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 20,
        width: "100%",
    },

    button: {
        padding: 20,
        alignSelf: "center"
    },

    checkboxControl: {
    },
});
