import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Source/Screens/Login';
import {NativeBaseProvider} from 'native-base';
import Register from './Source/Screens/Register';
import Home from './Source/Screens/Home';
import Books from './Source/Screens/Books';
import Profile from './Source/Screens/Profile';
import Profile_user from './Source/Screens/Profile_user';
import Profile_about from './Source/Screens/Profile_about';
import Profile_Favorite from './Source/Screens/Profile_Favorite';
import Profile_SendFeedBack from './Source/Screens/Profile_SendFeedBack';
import Profile_order from './Source/Screens/Profile_order';
import Profile_sellingBook from './Source/Screens/Profile_sellingBook';
import {useDispatch, useSelector} from 'react-redux';
import {getUserData} from './Source/Redux/Reducer/AuthReducer';

const Stack = createNativeStackNavigator();

const Main = () => {
  console.log("@@##$$",useSelector(state => state));
  const userdata = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={
            userdata && userdata.data ? 'home' : 'login'
          }
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="books" component={Books} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="profileUser" component={Profile_user} />
          <Stack.Screen name="profileabout" component={Profile_about} />
          <Stack.Screen name="profileFavorite" component={Profile_Favorite} />
          <Stack.Screen
            name="profileSendFeedBack"
            component={Profile_SendFeedBack}
          />
          <Stack.Screen name="profileorder" component={Profile_order} />
          <Stack.Screen
            name="profilesellingBook"
            component={Profile_sellingBook}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Main;
