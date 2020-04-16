import styled from 'styled-components/native';
import { DefaultColors } from '@assets/css/global';

export const FormContainer = styled.View`
    margin: 10px
`;

export const Label = styled.View`
    margin: 10px
`;

export const FieldLabel = styled.Text`
    color: ${DefaultColors.color1};
    font-size: 18px;
    margin-bottom: 4px;
`;

export const TextField = styled.TextInput`
    padding: 2px 10px;
    background-color: ${DefaultColors.color1};
    border-radius: 4px
`;