import React from 'react';
import MainPage from '@pages/main/main-page'
import AddTransaction from '@pages/transactions/add-transaction'
import TransactionsPage from '@pages/transactions/transactions-page';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import { createAppContainer } from 'react-navigation'
import { DefaultColors } from '@assets/css/global';

const Routes = createAppContainer(
    createAnimatedSwitchNavigator({
        Home: MainPage,
        TransactionsPage: TransactionsPage,
        AddTransaction: AddTransaction
    }, {
        // transitionViewStyle: { backgroundColor: DefaultColors.background },
        transition: (
            <Transition.Together>
                <Transition.Out
                    type="slide-right"
                    durationMs={200}
                    interpolation="easeIn"
                />
                <Transition.In type="slide-left" durationMs={200} />
            </Transition.Together>
        ),
    })
);

export default Routes;