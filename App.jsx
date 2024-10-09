import React from 'react';
// import {Provider} from 'react-redux';
import Main from './Main';
import {store} from './Source/Redux/Store/Store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import { Provider as ReduxProvider } from 'react-redux'; 
import ForgotPassword from './Source/Screens/ForgotPassword';
import VerifyAccount from './Source/Screens/VerifyAccount';
import Register from './Source/Screens/Register';

export default App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ReduxProvider store={store}>
        <Main />
        {/* <ForgotPassword/> */}
        {/* <VerifyAccount/> */}
        {/* <Register/> */}
      </ReduxProvider>
    </GestureHandlerRootView>
  );
};
