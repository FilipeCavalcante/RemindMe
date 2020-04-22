import styled from 'styled-components/native';
import { DefaultColors } from '@assets/css/global';

export const PageHeaderContainer = styled.View`
  flex: 1;
  background-color: ${DefaultColors.color1};
  border-bottom-width: 1px;
  border-bottom-color: ${DefaultColors.color2};
  height: 44px;
  flex-direction: row;
  align-content: flex-start;
`;

export const TitleArea = styled.View`
    margin: 10px;
    flex: 1;
`;

export const IconArea = styled(TitleArea)`
    max-width: 26px
`;

export const PageHeaderTitle = styled.Text`
    font-size: 20px;
    color: ${DefaultColors.color5};
    font-weight: bold;
    align-self: flex-end;
`;
