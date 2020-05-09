import styled from 'styled-components/native';
import { DefaultColors } from '@assets/css/global';
import { StyleSheet } from 'react-native';

export const PayablesPageContainer = styled.View`
    flex: 1;
    min-height: 300px;
`;


export const PayableItem = styled.View`
    flex: 1;
    background-color: ${ DefaultColors.white};
    min-height: 90px;
    border: 1px solid #F1F1F1;
    border-top-width: 0;
`;

export const payablesStyle = StyleSheet.create({
    formControl: {
        margin: 10,
        padding: 1,
    },

    swipeOut: {
        flex: 1,
    },
});
