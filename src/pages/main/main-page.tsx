import React from 'react';
import { HomeContainer, WidgetsArea, MainArea, ButtonArea } from '@pages/main/main-page.styled';
import { Button, View } from 'react-native';

const MainPage = ({ navigation }: any) => {

    const goToTransactions = () => {
        navigation.navigate("TransactionsPage");
    }

    return (
        <HomeContainer>
            <WidgetsArea />
            <MainArea />
            <ButtonArea>
                <View style={{ flex: 1, flexDirection: "column" }}>
                    
                </View>
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <Button title="List All" onPress={() => goToTransactions()} />
                </View>
            </ButtonArea>
        </HomeContainer>
    )
}

export default MainPage;