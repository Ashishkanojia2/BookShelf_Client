import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Source/Screens/Login';
import { NativeBaseProvider } from 'native-base';
import Register from './Source/Screens/Register';
import Home from './Source/Screens/Home';
import Books from './Source/Screens/Books';
import Profile from './Source/Screens/Profile';
import Profile_user from './Source/Screens/Profile_user';
import Profile_Favorite from './Source/Screens/Profile_Favorite';
import Profile_order from './Source/Screens/Profile_order';
import { useDispatch } from 'react-redux';
import { useGetUserQuery } from './Source/RTKquery/Slices/ApiSclices';
import { getUserData } from './Source/Redux/Reducer/AuthReducer';
import WaitingScren from './Source/Components/Comp/WaitingScren';
import AddBooks from './Source/Screens/AddBooks';
import About from './Source/Screens/About';
import Favorite from './Source/Screens/Favorite';
import Order from './Source/Screens/Order';
import SellingBook from './Source/Screens/SellingBook';
import Sending_FeedBack from './Source/Screens/Sending_FeedBack';
import TryComp from './Source/Screens/TryComp';
import Camera from './Source/Screens/Camera';

const Stack = createNativeStackNavigator();

const Main = () => {
  const {data, isSuccess, isFetching} = useGetUserQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(getUserData({data: data.user}));
    }
  }, [isSuccess, data, dispatch]);

  return isFetching ? (
    <WaitingScren />
  ) : (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={isSuccess ? 'home' : 'login'}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="books" component={Books} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="profileUser" component={Profile_user} />
          <Stack.Screen name="profileFavorite" component={Profile_Favorite} />
          <Stack.Screen name="addbooks" component={AddBooks} />
          <Stack.Screen name="about" component={About} />
          <Stack.Screen name="favorite" component={Favorite} />
          <Stack.Screen name="order" component={Order} />
          <Stack.Screen name="sellingbooks" component={SellingBook} />
          <Stack.Screen name="feedback" component={Sending_FeedBack} />
          <Stack.Screen name="trycomp" component={TryComp} />
          <Stack.Screen name="camera" component={Camera} />

          <Stack.Screen name="profileorder" component={Profile_order} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Main;
