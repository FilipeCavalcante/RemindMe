import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ButtonRnd } from './generic-buttons.style';
import { DefaultColors } from '@assets/css/global';

interface IButtonProperties {
    label?: string;
    icon?: string;
    onClickFn?: any;
    isDisabled?: boolean;
}

export const ButtonRounded = ({
    icon,
    onClickFn,
    isDisabled = false,
}: IButtonProperties) => {
    return (
        <ButtonRnd onPress={onClickFn}>
            <Icon name={icon || 'add'} size={24} style={{ color: '#fff' }} />
        </ButtonRnd>
    );
};
