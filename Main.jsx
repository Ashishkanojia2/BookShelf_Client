import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Source/Screens/Login';
import {NativeBaseProvider} from 'native-base';
import Register from './Source/Screens/Register';
import Home from './Source/Screens/Home';
import Books from './Source/Screens/Books';
import Profile from './Source/Screens/Profile';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="books" component={Books} />
          <Stack.Screen name="profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Main;
