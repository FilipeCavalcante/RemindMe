import React from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';

export default function DeleteSwipe({ progress, dragX, handleDelete }: any) {
    const scale = dragX.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    return (
        <TouchableOpacity onPress={handleDelete}>
            <View>
                <Animated.Text
                    style={[
                        { transform: [{ scale }] },
                    ]}
                >
                    Delete
                </Animated.Text>
            </View>
        </TouchableOpacity>
    );
}
