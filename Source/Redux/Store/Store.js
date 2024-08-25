// import {configureStore} from '@reduxjs/toolkit';
// import userData from '../Reducer/AuthReducer';
// import {api} from '../../RTKquery/Slices/ApiSclices';
// import {bookApi} from '../../RTKquery/Slices/BookApiSclice';
// // import { setupListeners } from '@reduxjs/toolkit/query';

// export const store = configureStore({
//   reducer: {
//     user: userData,
//     [api.reducerPath]: api.reducer,
//     [bookApi.reducerPath]: bookApi.reducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(api.middleware, bookApi.middleware),
// });

//
//
//
import {configureStore} from '@reduxjs/toolkit';
import userData from '../Reducer/AuthReducer';
// import {userApi} from '../../RTKquery/Slices/ApiSclices';
// userApi
// import {bookApi} from '../../RTKquery/Slices/BookApiSclice';
import {setupListeners} from '@reduxjs/toolkit/query';
// import { bookSliceReducer } from '../Reducer/BookReducer';
import {userApi} from '../../RTKquery/Slices/ApiSclices';
import BookReducer from '../Reducer/BookReducer';
import {bookApi} from '../../RTKquery/Slices/BookApiSclice';
// import bookSliceReducer from '../Reducer/BookReducer';
// bookSliceReducer

export const store = configureStore({
  reducer: {
    user: userData,
    book: BookReducer,
    // booksData: bookSliceReducer,
    [userApi.reducerPath]: userApi.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
    // [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(userApi.middleware, bookApi.middleware),
});

setupListeners(store.dispatch);
