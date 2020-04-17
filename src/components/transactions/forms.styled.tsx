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
    color: ${DefaultColors.color1};
    font-size: 18px;
    margin-bottom: 4px;
`;

export const SaveButton = styled.TouchableOpacity`
    border-width: 0px;
    align-items: center;
    justify-content: center;
    width: 95%;
    /* align-self: center; */
    bottom: 10px;
    height: 60px;
    background-color: ${DefaultColors.color5};
    border-radius: 4px;
    z-index: 10;
    elevation: 5;
    left: 10px;
`;

export const formStyle = StyleSheet.create({
    inputControl: {
        backgroundColor: DefaultColors.color1,
        borderRadius: 4,
        paddingLeft: 20
    },

    button: {
        padding: 20,
        alignSelf: "center"
    },
    
    checkboxControl: {
    },
});
