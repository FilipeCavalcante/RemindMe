import styled from 'styled-components/native';
import { DefaultColors } from '@assets/css/global';
import { StyleSheet } from 'react-native';

export const PayablesPageContainer = styled.ScrollView.attrs({})`
    flex: 1;
`;

export const PayablesList = styled.View`
    flex: 1;
`;

export const PayableItem = styled.View`
    flex: 1;
    flex-direction: row;
    background-color: ${DefaultColors.white};
    border: 1px solid #F1f1f1;
    padding: 14px;
    margin-bottom: 6px;
    height: 80px
`;

export const PayableItemInfo = styled.View`
    flex: ${(p) => p.flexValue};
    align-self: center;
`;

export const PayableItemDateText = styled.Text`
    color: ${DefaultColors.color3};
    font-size: 12px;
`;

export const PayableItemTitleText = styled(PayableItemDateText)`
    font-size: 16px;
`;

export const PayableItemBarcodeText = styled(PayableItemDateText)`
    color: ${DefaultColors.color5};
`;

export const PayableItemValueText = styled.Text`
    align-self: flex-end;
    font-size: 20px;
    color: ${DefaultColors.color3};
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
