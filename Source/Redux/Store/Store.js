import {configureStore} from '@reduxjs/toolkit';
import userData from '../Reducer/AuthReducer';
import {api} from '../../RTKquery/Slices/ApiSclices';
// import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    user: userData,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});
// setupListeners(store.dispatch)



// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from '../Reducer/AuthReducer'; // Make sure this path is correct
// import { api } from '../../RTKquery/Slices/ApiSclices'; // Make sure this path is correct

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(api.middleware),
// });
