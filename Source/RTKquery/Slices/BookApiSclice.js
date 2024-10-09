import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bookshelf-server-4.onrender.com/api/v1/book',
    // baseUrl: 'http://192.168.137.1:4000/api/v1/book',
  }),
  endpoints: builder => ({
    registerBook: builder.mutation({
      query: book => ({
        url: '/register',
        method: 'POST',
        body: book,
      }),
    }),
    getBookData: builder.query({
      query: () => ({
        url: '/getallbooks',
      }),
    }),
  }),
});

export const {useRegisterBookMutation, useGetBookDataQuery} = bookApi;
