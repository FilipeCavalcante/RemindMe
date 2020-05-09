import { StyleSheet } from 'react-native';
import { DefaultColors } from '@assets/css/global';

export const swipeStyles = StyleSheet.create({
    actionText: {
        fontSize: 16,
        color: DefaultColors.white,
        padding: 20,
    },

    action: {
        backgroundColor: DefaultColors.danger,
        justifyContent: 'center',
        textAlignVertical: 'center',
        minHeight: 90,
        maxWidth: 200,
    },
});
