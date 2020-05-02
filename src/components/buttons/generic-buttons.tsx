import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ButtonRnd, buttonsStyles } from './generic-buttons.style';
import { DefaultColors } from '@assets/css/global';
import { ButtonArea } from '@pages/main/main-page.styled';

interface IButtonProperties {
    label?: string;
    icon?: string;
    onClickFn?: any;
    isDisabled?: boolean;
    size: number;
}

export const ButtonRounded = (props: IButtonProperties) => {
    return (
        <ButtonRnd onPress={props.onClickFn}>
            <Icon
                name={props.icon || 'add'}
                size={props.size || 24}
                style={{ color: '#fff' }}
            />
        </ButtonRnd>
    );
};

export const IconButton = (props: IButtonProperties) => {
    return (
        <Icon
            onPress={props.onClickFn}
            name={props.icon || 'question-mark'}
            size={props.size || 28}
            style={buttonsStyles.iconButton}
        />
    );
};
