import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DefaultColors } from '@assets/css/global';
import { PageHeaderContainer, PageHeaderTitle, IconArea, TitleArea } from '@components/header/page-header.styled'

export default function PageHeader({ pageTitle, returnFn }: any) {
    return (
        <PageHeaderContainer>
            <IconArea>
                <Icon onPress={() => returnFn()} name="backspace" size={24} style={{ color: DefaultColors.color5 }} />
            </IconArea>
            <TitleArea>
                <PageHeaderTitle>{pageTitle}</PageHeaderTitle>
            </TitleArea>
        </PageHeaderContainer>
    )
}
