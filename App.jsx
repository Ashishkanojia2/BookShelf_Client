
import React from 'react';
import Main from './Main';
import {store, persistor} from './Source/Redux/Store/Store'; // Import persistor
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'; // Import PersistGate

export default App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ReduxProvider store={store}>
        {/* Wrap Main with PersistGate */}
        <PersistGate loading={null} persistor={persistor}>
          <Main />
        </PersistGate>
      </ReduxProvider>
    </GestureHandlerRootView>
  );
};

// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //
// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //
// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //
// // //// // //// // //// // //// // ////   THIS CODE IS WORKIGN CONDITION WITHOUT USING PRESIST // //// // ////
// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //
// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //
// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //
// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //
// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //
// import React from 'react';
// import Main from './Main';
// import {store} from './Source/Redux/Store/Store';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';

// import {Provider as ReduxProvider} from 'react-redux';

// export default App = () => {
//   return (
//     <GestureHandlerRootView style={{flex: 1}}>
//       <ReduxProvider store={store}>
//         <Main />
//       </ReduxProvider>
//     </GestureHandlerRootView>
//   );
// };
// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //
// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //
// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //
// // //// // //// // //// // //// // ////   THIS CODE IS WORKIGN CONDITION WITHOUT USING PRESIST // //// // ////
// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //
// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //
// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //
// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //
// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //// // //
// import React, {useEffect} from 'react';
// import Main from './Main';
// import {store, persistor} from './Source/Redux/Store/Store';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import {Provider as ReduxProvider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// if (__DEV__) {
//   require("./ReactotronConfig");
// }

// // const clearStorage = async () => {
// //   await AsyncStorage.clear();
// // };

// const App = () => {
//   // useEffect(() => {
//   //   // Clear AsyncStorage on app startup
//   //   clearStorage();
//   // }, []);

//   return (
//     <GestureHandlerRootView style={{flex: 1}}>
//       <ReduxProvider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           <Main />
//         </PersistGate>
//       </ReduxProvider>
//     </GestureHandlerRootView>
//   );
// };

// export default App;
