import React from 'react';
import {Provider} from 'react-redux';
import store from './Source/Redux/Store/Store';
import Main from './Main';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {api} from './Source/RTKquery/Slices/ApiSclices';

export default App = () => {
  return (
    <ApiProvider api={api}>
      <Main />
    </ApiProvider>
  );
};
