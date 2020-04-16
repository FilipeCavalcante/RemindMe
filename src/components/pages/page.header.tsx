import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DefaultColors } from '@assets/css/global';
import { PageHeaderContainer, PageHeaderTitle, IconArea, TitleArea } from '@assets/css/page-header.styled'
import { Header } from 'react-native/Libraries/NewAppScreen';


const PageHeader = ({ pageTitle, returnFn }) => {

    return (
        <PageHeaderContainer>
            <IconArea>
                <Icon onPress={() => returnFn()} name="backspace" size={24} style={{ color: DefaultColors.color1 }} />
            </IconArea>
            <TitleArea>
                <PageHeaderTitle>{pageTitle}</PageHeaderTitle>
            </TitleArea>
        </PageHeaderContainer>
    )
}



export default PageHeader;