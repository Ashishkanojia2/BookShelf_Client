import {configureStore} from '@reduxjs/toolkit';
import userData from '../Reducer/AuthReducer';
import {setupListeners} from '@reduxjs/toolkit/query';
import {userApi} from '../../RTKquery/Slices/ApiSclices';
import BookReducer from '../Reducer/BookReducer';
import {bookApi} from '../../RTKquery/Slices/BookApiSclice';
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
