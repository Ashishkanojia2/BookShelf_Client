import React from 'react';
import {Provider} from 'react-redux';
import Main from './Main';
import {store} from './Source/Redux/Store/Store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <Main />
      </Provider>
    </GestureHandlerRootView>
  );
};
