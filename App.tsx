import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultColors } from '@assets/css/global';

import MainPage from '@pages/main/main-page';
import Header from '@components/accounts/accounts';
// import MainDrawerNavigator from '@routes/drawer-routes';

const App: () => React$Node = () => {
    return (
        <>
            <NavigationContainer>
                <StatusBar />
                <SafeAreaView
                    style={{
                        flex: 1,
                        backgroundColor: DefaultColors.background,
                    }}>
                    {/* <MainDrawerNavigator /> */}
                    <Header />
                    <MainPage />
                </SafeAreaView>
            </NavigationContainer>
        </>
    );
};

export default App;
