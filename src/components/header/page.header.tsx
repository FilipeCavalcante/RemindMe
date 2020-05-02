import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DefaultColors } from '@assets/css/global';
import {
    PageHeaderContainer,
    PageHeaderTitle,
    IconArea,
    TitleArea,
} from '@components/header/page-header.styled';
import { clearStorage } from '@gateways/gateway';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function PageHeader({ pageTitle, returnFn, openDrawer }: any) {
    return (
        <PageHeaderContainer>
            <IconArea>
                <TouchableOpacity>
                    <Icon
                        name='apps'
                        color={DefaultColors.white}
                        size={24}
                        onPress={() => openDrawer()}
                    />
                </TouchableOpacity>
            </IconArea>
            <TitleArea>
                <PageHeaderTitle>{pageTitle}</PageHeaderTitle>
            </TitleArea>
        </PageHeaderContainer>
    );
}
