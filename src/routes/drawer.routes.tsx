import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';

import MainPage from '@pages/main/main-page';
import PayablesPage from '@pages/payables/payables.page';
import Sidebar from '@components/sidebar/sidebar.component';
import CreatePayablePage from '@pages/payables/create-payable.page';
import SettingsPage from '@pages/settings/settings.page';
import EditPayablePage from '@pages/payables/edit-payable.page';


export const AppDrawerRouteNavigation = createDrawerNavigator({
    Main: { screen: MainPage, },
    SettingsPage: { screen: SettingsPage },
    PayablesPage: { screen: PayablesPage },
    CreatePayablePage: { screen: CreatePayablePage },
    EditPayablePage: { screen: EditPayablePage },

}, {
    initialRouteName: 'Main',
    unmountInactiveRoutes: true,
    contentComponent: props => <Sidebar {...props} />
});
