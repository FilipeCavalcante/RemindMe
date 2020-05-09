import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultColors } from '@assets/css/global';

import MainPage from '@pages/main/main-page';

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar backgroundColor={DefaultColors.color5} barStyle="dark-content" />
            <NavigationContainer style={{
                flex: 1,
                backgroundColor: DefaultColors.background,
            }}>
                <MainPage />
            </NavigationContainer>
        </>
    );
};

export default App;
