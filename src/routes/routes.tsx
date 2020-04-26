import React from 'react';
import { createAppContainer } from 'react-navigation';
import { AppDrawerRouteNavigation } from '@routes/drawer.routes';

export const AppContainer = createAppContainer(AppDrawerRouteNavigation);
