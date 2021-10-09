import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  View,
  StatusBar
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  OnboardingScreen,
  SignupLoginScreen,
} from './Src/Screens/Index';

const Stack = createStackNavigator();
const {
  Navigator,
  Screen
} = Stack;

export default class UnAuthenticatedStack extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <PaperProvider>
        <View style={{flex: 1}}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="#fafafa"
          />
          <NavigationContainer>
            <Navigator initialRouteName="OnboardingScreen">
            <Screen
                name="OnboardingScreen"
                component={OnboardingScreen}
                options={{ headerShown: false }}
              />
              <Screen
                name="SignupLoginScreen"
                component={SignupLoginScreen}
                options={{ headerShown: false }}
              />
            </Navigator>
          </NavigationContainer>
        </View>
      </PaperProvider>
    );
  }
}
