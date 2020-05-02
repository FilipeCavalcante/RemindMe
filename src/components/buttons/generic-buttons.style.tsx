import styled from 'styled-components/native';
import { DefaultColors } from '@assets/css/global';
import { StyleSheet } from 'react-native';

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
    elevation: 6;
`;

export const ButtonArea = styled.View`
    flex: 1;
    max-height: 50px;
    background-color: ${DefaultColors.white};
    border-top-width: 1px;
    border-top-color: ${DefaultColors.color1};
`;

export const buttonsStyles = StyleSheet.create({
    iconButton: {
        position: 'relative',
        alignItems: 'center',
        left: 30,
        top: 10,
        color: DefaultColors.color5,
    },
});
