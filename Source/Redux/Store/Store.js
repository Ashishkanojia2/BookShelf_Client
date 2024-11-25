import {userApi} from '../../RTKquery/Slices/ApiSclices';
import {configureStore} from '@reduxjs/toolkit';
import {bookApi} from '../../RTKquery/Slices/BookApiSclice';
import {setupListeners} from '@reduxjs/toolkit/query';

import userData from '../Reducer/AuthReducer';
import BookReducer from '../Reducer/BookReducer';
import cartReducer from '../Reducer/CartReducer';

export const store = configureStore({
  reducer: {
    user: userData,
    book: BookReducer,
    cart: cartReducer,
    // booksData: bookSliceReducer,
    [userApi.reducerPath]: userApi.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
    // [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(userApi.middleware, bookApi.middleware),
});

setupListeners(store.dispatch);

// // //

// // //
// // // using redux persist
// // //
// // import {userApi} from '../../RTKquery/Slices/ApiSclices';
// // import {configureStore} from '@reduxjs/toolkit';
// // import {bookApi} from '../../RTKquery/Slices/BookApiSclice';
// // import {setupListeners} from '@reduxjs/toolkit/query';

// // import userData from '../Reducer/AuthReducer';
// // import BookReducer from '../Reducer/BookReducer';
// // import cartReducer from '../Reducer/CartReducer';

// // // Using Redux Persist
// // // import storage from 'redux-persist/lib/storage';
// // import {persistStore, persistReducer} from 'redux-persist';
// // import {combineReducers} from 'redux'; 

// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // const persistConfig = {
// //   key: 'root',
// //   storage: AsyncStorage,
// // };

// // // Combine your reducers into a root reducer
// // const rootReducer = combineReducers({
// //   user: userData,
// //   book: BookReducer,
// //   cart: cartReducer,
// //   [userApi.reducerPath]: userApi.reducer,
// //   [bookApi.reducerPath]: bookApi.reducer,
// // });

// // // Create a persisted reducer
// // const persistedReducer = persistReducer(persistConfig, rootReducer);

// // // export const store = configureStore({
// // //   reducer: persistedReducer,
// // //   middleware: (getDefaultMiddleware) =>
// // //     getDefaultMiddleware().concat(userApi.middleware, bookApi.middleware),
// // // });


// // const logger = store => next => action => {
// //   console.log('dispatching', action);
// //   return next(action);
// // };

// // export const store = configureStore({
// //   reducer: persistedReducer,
// //   middleware: getDefaultMiddleware =>
// //     getDefaultMiddleware({
// //       serializableCheck: {
// //         ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], 
// //       },
// //     }).concat(userApi.middleware, bookApi.middleware),
// // });

// // // Create a persistor
// // export const persistor = persistStore(store);

// // setupListeners(store.dispatch);



// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import { combineReducers } from 'redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { setupListeners } from '@reduxjs/toolkit/query';
// import { userApi } from '../../RTKquery/Slices/ApiSclices';
// import { bookApi } from '../../RTKquery/Slices/BookApiSclice';

// import userData from '../Reducer/AuthReducer';
// import BookReducer from '../Reducer/BookReducer';
// import cartReducer from '../Reducer/CartReducer';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

// const rootReducer = combineReducers({
//   user: userData,
//   book: BookReducer,
//   cart: cartReducer,
//   [userApi.reducerPath]: userApi.reducer,
//   [bookApi.reducerPath]: bookApi.reducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const logger = store => next => action => {
//   console.log('dispatching', action);
//   return next(action);
// };

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
//       },
//     }).concat(userApi.middleware, bookApi.middleware, logger),
// });

// export const persistor = persistStore(store);
// setupListeners(store.dispatch);
