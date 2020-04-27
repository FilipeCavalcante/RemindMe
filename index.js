/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import {AppContainer} from '@routes/routes';

AppRegistry.registerComponent(appName, () => AppContainer);
