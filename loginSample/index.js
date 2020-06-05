/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
export * from './src/Components/Common/Button';
export * from './src/Components/Common/Card';
export * from './src/Components/Common/CardSection';

AppRegistry.registerComponent(appName, () => App);
