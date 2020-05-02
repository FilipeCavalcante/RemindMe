import styled from 'styled-components/native';
import { DefaultColors } from '@assets/css/global';
import { StyleSheet } from 'react-native';

export const PayablesPageContainer = styled.ScrollView.attrs({})`
    flex: 1;
`;

export const PayablesList = styled.View`
    flex: 1;
`;

export const PayableItem = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    background-color: ${DefaultColors.white};
    margin: 6px;
    border-bottom-width: 1px;
    border-bottom-color: ${DefaultColors.color1};
    border-left-width: 4px;
    border-left-color: ${(props) =>
        props.isOverdued ? DefaultColors.danger : DefaultColors.success};
    padding: 14px;
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

export const styles = StyleSheet.create({
    formControl: {
        margin: 10,
        padding: 1,
    },
});
