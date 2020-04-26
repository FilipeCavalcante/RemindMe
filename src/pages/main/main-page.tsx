import React from 'react';
import {
    HomeContainer,
    WidgetsArea,
    MainArea,
    ButtonArea,
} from '@pages/main/main-page.styled';
import { Button, View } from 'react-native';
import { GeneralConst } from '@shared/general.constants';
import PageHeader from '@components/header/page.header';

const MainPage = ({ navigation }: any) => {
    return (
        <HomeContainer>
           <PageHeader pageTitle="Home" openDrawer={ navigation.openDrawer }/>
          
        </HomeContainer>
    );
};

export default MainPage;
