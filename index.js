/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {googleSiginConfig} from '@utils/index';
import reactotonConfiq from './ReactotronConfig';

googleSiginConfig();

// GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

if (__DEV__) {
  reactotonConfiq();
} else {
  console.log = () => {};
}

AppRegistry.registerComponent(appName, () => App);
