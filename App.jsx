import React from 'react';
import { Provider } from 'react-redux';
import Main from './Main';
import { store } from './Source/Redux/Store/Store';

export default App = () => {
  return (
    // <ApiProvider api={api}>
    <Provider store={store}>
      <Main />
    </Provider>
    // </ApiProvider>
  );
};
