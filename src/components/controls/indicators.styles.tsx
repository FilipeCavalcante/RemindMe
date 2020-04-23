import React from 'react';
import { StyleSheet } from 'react-native';

export const indicatorStyles = StyleSheet.create({
    activityIndicatorAbsolute: {
        position: 'absolute',
        width: 100,
        height: 100,
        alignSelf: 'center',
        top: 30,
        zIndex: 1000,
    },
});
