/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Routes, {AppContainer} from '@routes/routes';

AppRegistry.registerComponent(appName, () => AppContainer);
