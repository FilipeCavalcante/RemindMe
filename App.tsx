/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, } from 'react-native';
import { DefaultColors } from '@assets/css/global';

import MainPage from '@pages/main/MainPage';
import Header from '@components/accounts/header';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor={DefaultColors.color3} />
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <MainPage />
      </SafeAreaView>
    </>
  );
};

export default App;
