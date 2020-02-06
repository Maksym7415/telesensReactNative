/**
 * @format
 */

import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import { YellowBox } from 'react-native'
import TrackPlayer from 'react-native-track-player'

YellowBox.ignoreWarnings(['Remote debugger'])
AppRegistry.registerComponent(appName, () => App)
TrackPlayer.registerPlaybackService(() => require('./app/components/trackPlayer/service'));
