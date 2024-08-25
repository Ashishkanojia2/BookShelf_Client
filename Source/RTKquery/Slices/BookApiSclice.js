import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bookshelf-server-4.onrender.com/api/v1/book',
  }),
  endpoints: builder => ({
    registerBook: builder.mutation({
      query: book => ({
        url: '/register',
        method: 'POST',
        body: book,
      }),
    }),
    // getBookData : builder.query({
    //     query:()=>({
    //         url:"/"
    //     })
    // })
    // logoutUser: builder.query({
    //   query: () => ({
    //     url: '/user/logout',
    //   }),
    // }),
    // registerUser: builder.mutation({
    //   query: registerUser => ({
    //     url: '/user/register',
    //     method: 'POST',
    //     body: registerUser,
    //   }),
    // }),
  }),
});

export const {useRegisterBookMutation} = bookApi;
