import React from 'react';
import { HomeContainer, WidgetsArea, MainArea, ButtonArea } from '@assets/css/mainpage.styled';
import { Button, View } from 'react-native';

const MainPage = ({ navigation }: any) => {

    const goToNewTransaction = () => {
        navigation.navigate("AddTransaction");
    }
    const goToTransactions = () => {
        navigation.navigate("TransactionsPage");
    }

    return (
        <HomeContainer>
            <WidgetsArea />
            <MainArea />
            <ButtonArea>
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <Button title="Add" onPress={() => goToNewTransaction()} />
                </View>
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <Button title="List All" onPress={() => goToTransactions()} />
                </View>
            </ButtonArea>
        </HomeContainer>
    )
}

export default MainPage;