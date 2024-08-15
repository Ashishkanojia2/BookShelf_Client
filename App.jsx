import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './Source/Redux/Store/Store';
import Main from './Main';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {api} from './Source/RTKquery/Slices/ApiSclices';
import Login from './Source/Screens/Login';

export default App = () => {
  return (
    <ApiProvider api={api}>
      <Main />
    </ApiProvider>
  );
};
