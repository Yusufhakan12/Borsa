import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './navigation/tabs';
import { io } from 'socket.io-client';
import { Provider } from 'react-redux';
import {legacy_createStore as createStore} from 'redux'
import { rootReducer } from './src/store';
import store from './src/store';
import SignInScreen from './screens/GirisEkran/SignInScreen';
const Stack = createNativeStackNavigator();
 export const socket=io('http://10.7.254.186:3000');
socket.on('connect',()=>{
  console.log('connected');
});

const App = () => {
  

  return (
    <Provider store={store}>
    <NavigationContainer> 

      <Tabs/>
    </NavigationContainer>
    </Provider>
  );
};

const styles=StyleSheet.create({

divider:{
  height:StyleSheet.hairlineWidth,
  backgroundColor:'#A9ABB1',
  marginHorizontal:16,
  marginTop:16

},
});

export default App;