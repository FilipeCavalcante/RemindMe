import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { DefaultColors } from '@assets/css/global';

export const PayableInfoRow = styled.View`
    flex: ${p => p.flexRow || 1};
    flex-direction: row
`;


export const payableItemStyle = StyleSheet.create({
    title: {
        fontSize: 18,
        top: 10,
        left: 10,
        fontWeight: 'bold',
        color: DefaultColors.color5
    },
    icon: { alignSelf: 'flex-end', position: 'absolute', top: 10, right: 20 },
    info: { position: 'relative', width: '33%', alignItems: 'center', padding: 10, top: 4 },
    infoTitle: { fontSize: 12, color: DefaultColors.color2 }
})
