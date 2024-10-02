import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    // http://localhost:4000/api/v1/user/login
    // baseUrl: 'http://192.168.137.1:4000/api/v1/user',
    baseUrl: 'http://192.168.186.190:4000/api/v1/user',
    // 192.168.186.190
  }),
  endpoints: builder => ({
    getUser: builder.query({
      query: () => '/me',
    }),
    LoginUser: builder.mutation({
      query: user => ({
        url: '/login',
        method: 'POST',
        body: user,
      }),
    }),
    logoutUser: builder.query({
      query: () => ({
        url: '/logout',
      }),
    }),
    registerUser: builder.mutation({
      query: registerUser => ({
        url: '/register',
        method: 'POST',
        body: registerUser,
      }),
    }),
    updateUser: builder.mutation({
      query: data => ({
        url: './updateProfile',
        method: 'PUT',
        body: data,
        // headers: {
        //   'Content-Type': 'multipart/form-data', // Optional, usually auto-handled by the browser
        // },
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useLazyLogoutUserQuery,
  useUpdateUserMutation,
  // useLogoutUserQuery,
} = userApi;
