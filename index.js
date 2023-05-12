/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import SignInScreen from './screens/GirisEkran/SignInScreen';
/** 
const Root=()=>{
    <Provider store={store}>
        <App/>
    </Provider>
};
*/
AppRegistry.registerComponent(appName, () => App);
