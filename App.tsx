import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { DefaultColors } from '@assets/css/global';

import MainPage from '@pages/main/MainPage';
import Header from '@components/accounts/header';
// import MainDrawerNavigator from '@routes/drawer-routes';


const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor={DefaultColors.color3} />
        <SafeAreaView style={{ flex: 1 }}>
          {/* <MainDrawerNavigator /> */}
          <Header />
          <MainPage />
        </SafeAreaView>
      </NavigationContainer>

    </>
  );
};

export default App;
