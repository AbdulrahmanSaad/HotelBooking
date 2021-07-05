import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  View,
  StatusBar
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SignupLoginScreen
} from './Src/Screens/Index';

const Stack = createStackNavigator();
const {
  Navigator,
  Screen
} = Stack;

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#fafafa"
        />
        <NavigationContainer>
          <Navigator initialRouteName="SignupLoginScreen">
            <Screen name="SignupLoginScreen" component={SignupLoginScreen} />
          </Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
