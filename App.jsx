import React from 'react';
import {Provider} from 'react-redux';
import Main from './Main';
import {store} from './Source/Redux/Store/Store';
import WaitingScren from './Source/Components/Comp/WaitingScren';
import Product_Books from './Source/Screens/Product_Books';
import Cart from './Source/Screens/Cart';

export default App = () => {
  return (
    // <ApiProvider api={api}>
    <Provider store={store}>
      {/* <WaitingScren/> */}
      {/* <Product_Books /> */}
      {/* <Main /> */}
      <Cart/>
    </Provider>
    // </ApiProvider>
  );
};
