import styled from 'styled-components/native';
import { DefaultColors } from '@assets/css/global';

export const PageHeaderContainer = styled.View`
  flex: 1;
  background-color: ${DefaultColors.color1};
  border-bottom-width: 1px;
  border-bottom-color: ${DefaultColors.color2};
  height: 50px;
`;

export const IconArea = styled.View`
    margin: 10px;
    position: absolute;
`;

export const TitleArea = styled(IconArea)`
    right: 0px;
`;


export const PageHeaderTitle = styled.Text`
    font-size: 20px;
    color: ${DefaultColors.color3};
`;
