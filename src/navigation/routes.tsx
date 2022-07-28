import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/Auth/Login';
import ForgotPasswordScreen from '../screens/Auth/ForgotPassword';

const {Navigator, Screen} = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Screen name="Login" component={LoginScreen} />
        <Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
