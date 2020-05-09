import React from 'react';
import { createAppContainer } from 'react-navigation';
import { AppDrawerRouteNavigation } from '@routes/drawer.routes';
import { GeneralConst } from '@shared/general.constants';

export const DefaultRoutes = [
    { name: 'Home', route: GeneralConst.homePage, icon: 'home' },
    { name: 'Boletos', route: GeneralConst.payablePage, icon: 'cash-multiple' },
    { name: 'Configurações', route: GeneralConst.settingsPage, icon: 'settings' }
];

export const AppContainer = createAppContainer(AppDrawerRouteNavigation);
