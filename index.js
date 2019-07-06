/**
 * @format
 */

import { AppRegistry } from 'react-native';

import AppRoot from './app/core/ui/layouts/AppRoot';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppRoot);
