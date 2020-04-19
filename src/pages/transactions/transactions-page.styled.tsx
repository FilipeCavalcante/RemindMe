import styled from 'styled-components/native';
import { DefaultColors } from "@assets/css/global";
import { StyleSheet } from 'react-native';

export const TransactionPageContainer = styled.ScrollView.attrs({})`
  flex: 1;
  background-color: ${DefaultColors.color1};
`;

export const TransactionsList = styled.View`
  flex: 1;
`;

export const TransactionItem = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 6px 16px;
  padding: 8px;
  background-color: ${DefaultColors.color5};
  border-radius: 4px;
  elevation: 5;
`;

export const TransactionItemInfo = styled.View`
  flex: ${p => p.flexValue};
`;

export const TransactionItemDateText = styled.Text`
  color: ${DefaultColors.color1};
  font-size: 10px;
`;

export const TransactionItemTitleText = styled(TransactionItemDateText)`
  font-size: 14px;
`;

export const TransactionItemValueText = styled.Text`
  align-self: flex-end;
  font-size: 16px;
  color: ${DefaultColors.color1};
  margin-top: 4px;
`;

export const styles = StyleSheet.create({
  formControl: {
    margin: 10,
    padding: 1,
  },
})
