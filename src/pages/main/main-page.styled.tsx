import styled from 'styled-components/native';
import { DefaultColors } from "@assets/css/global";


export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${DefaultColors.color3}
`;

export const WidgetsArea = styled.View`
  flex: 1;
  max-height: 160px;
`;

export const MainArea = styled.View`
  flex: 1;
`;

export const ButtonArea = styled.View`
  flex: 1;
  max-height: 60px;
`;
