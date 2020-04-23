import React from 'react';
import MainPage from '@pages/main/main-page';
import CreatePayablePage from '@pages/payables/create-payable.page';
import PayablesPage from '@pages/payables/payables.page';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import { Transition } from 'react-native-reanimated';
import { createAppContainer } from 'react-navigation';

const Routes = createAppContainer(
    createAnimatedSwitchNavigator(
        {
            Home: MainPage,
            PayablesPage: PayablesPage,
            CreatePayablePage: CreatePayablePage,
        },
        {
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
        },
    ),
);

export default Routes;
