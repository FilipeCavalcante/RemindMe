import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { indicatorStyles } from './indicators.styles';
import { DefaultColors } from '@assets/css/global';

export const LoadingIndicator = ({ isVisible, size }: any) => {
    return (
        <>
            {isVisible && (
                <ActivityIndicator
                    style={indicatorStyles.activityIndicatorAbsolute}
                    size={size}
                    color={DefaultColors.color5}
                />
            )}
        </>
    );
};
