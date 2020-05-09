import React from 'react';
import { DefaultColors } from '@assets/css/global';
import { View, Animated, TouchableOpacity } from 'react-native';
import { swipeStyles } from '@components/swipe-actions/swipe-actions.style';

class SwipeActionProperties {
    progress?: any;
    dragX: any;
    textAction: string = '';
    colors: { text: string, background: string } = { background: DefaultColors.info, text: DefaultColors.color5 };
    handleAction?: any;
    leftAction: boolean = true;
}


export default function SwipeAction({ progress, dragX, textAction, colors, handleAction, leftAction }: SwipeActionProperties) {

    const inputRange = leftAction ? [0, 100] : [-100, 0];
    const outputRange = leftAction ? [0, 1] : [1, 0];


    const scale = dragX.interpolate({
        inputRange: inputRange,
        outputRange: outputRange,
        extrapolate: 'clamp',
    });

    return (
        <TouchableOpacity onPress={handleAction}>
            <View style={[swipeStyles.action, { backgroundColor: colors.background }]}>
                <Animated.Text
                    style={[
                        swipeStyles.actionText,
                        { transform: [{ scale }], color: colors.text },
                    ]}
                >
                    {textAction}
                </Animated.Text>
            </View>
        </TouchableOpacity>
    );

}
