import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Source/Screens/Login';
import { NativeBaseProvider } from 'native-base';
import Register from './Source/Screens/Register';
import Home from './Source/Screens/Home';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="login"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
            <Stack.Screen name="home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
  );
};

export default Main;
