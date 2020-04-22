import styled from 'styled-components/native';
import { DefaultColors } from '@assets/css/global'

export const ButtonRnd = styled.TouchableOpacity`
    position: absolute;
    border-radius: 100px;
    width: 60px;
    height: 60px;
    justify-content: center;
    align-items: center;
    background-color: ${DefaultColors.color5};
    bottom: 10px;
    align-self: center;
    elevation: 6
`;
