import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bookshelf-server-4.onrender.com/api/v1',
  }),
  endpoints: builder => ({
    getUser: builder.query({
      query: () => '/user/me',
    }),
    LoginUser: builder.mutation({
      query: user => ({
        url: '/user/login',
        method: 'POST',
        body: user,
      }),
    }),
    logoutUser: builder.query({
      query: () => ({
        url: '/user/logout',
      }),
    }),
    registerUser: builder.mutation({
      query: registerUser => ({
        url: '/user/register',
        method: 'POST',
        body: registerUser,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useLazyLogoutUserQuery,
  // useLogoutUserQuery,
} = api;
