import styled from 'styled-components/native';
import { DefaultColors } from "@assets/css/global";
import { StyleSheet } from 'react-native';

export const TransactionPageContainer = styled.ScrollView.attrs({})`
  flex: 1;
`;

export const TransactionsList = styled.View`
  flex: 1;
  margin-top: 6px;
  margin-bottom: 10px;
`;

export const TransactionItem = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${DefaultColors.color2};
`;

export const TransactionItemInfo = styled.View`
  flex: ${p => p.flexValue};
`;

export const TransactionItemDateText = styled.Text`
  color: ${DefaultColors.color3};
  font-size: 12px;
`;

export const TransactionItemTitleText = styled(TransactionItemDateText)`
  font-size: 18px;
`;

export const TransactionItemValueText = styled.Text`
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
})
