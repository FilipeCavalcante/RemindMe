import React from 'react';
import {
    HomeContainer,
    WidgetsArea,
    MainArea,
    ButtonArea,
} from '@pages/main/main-page.styled';
import { Button, View } from 'react-native';
import { GeneralConst } from '@shared/general.constants';

const MainPage = ({ navigation }: any) => {
    return (
        <HomeContainer>
            <WidgetsArea />
            <MainArea />
            <ButtonArea>
                <View style={{ flex: 1, flexDirection: 'column' }}></View>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Button
                        title="List All"
                        onPress={() =>
                            navigation.navigate(GeneralConst.payablePage)
                        }
                    />
                </View>
            </ButtonArea>
        </HomeContainer>
    );
};

export default MainPage;
