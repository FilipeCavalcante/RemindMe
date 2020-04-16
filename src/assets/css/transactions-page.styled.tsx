import styled from 'styled-components/native';
import { DefaultColors } from "@assets/css/global";
import { StyleSheet } from 'react-native';

export const TransactionPageContainer = styled.ScrollView.attrs({})`
  flex: 1;
  background-color: ${DefaultColors.color3};
`;

export const styles = StyleSheet.create({
  formControl: {
    backgroundColor: '#f6f6f6',
    margin: 10,
    padding: 1,
  },
})
