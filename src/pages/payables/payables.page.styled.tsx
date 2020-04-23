import styled from 'styled-components/native';
import { DefaultColors } from '@assets/css/global';
import { StyleSheet } from 'react-native';

export const PayablesPageContainer = styled.ScrollView.attrs({})`
    flex: 1;
`;

export const PayablesList = styled.View`
    flex: 1;
    margin-top: 6px;
    margin-bottom: 10px;
`;

export const PayableItem = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    padding: 16px;
    border-bottom-width: 1px;
    border-bottom-color: ${DefaultColors.color2};
`;

export const PayableItemInfo = styled.View`
    flex: ${(p) => p.flexValue};
`;

export const PayableItemDateText = styled.Text`
    color: ${DefaultColors.color3};
    font-size: 12px;
`;

export const PayableItemTitleText = styled(PayableItemDateText)`
    font-size: 18px;
`;

export const PayableItemValueText = styled.Text`
    align-self: flex-end;
    font-size: 16px;
    color: ${DefaultColors.color3};
    margin-top: 4px;
`;

export const styles = StyleSheet.create({
    formControl: {
        margin: 10,
        padding: 1,
    },
});
