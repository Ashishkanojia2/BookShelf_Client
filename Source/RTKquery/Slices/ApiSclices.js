import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    // http://localhost:4000/api/v1/user/login
    // baseUrl: 'http://192.168.137.1:4000/api/v1/user',
    // baseUrl: 'http://192.168.186.190:4000/api/v1/user',
    baseUrl: 'http://192.168.137.1:4000/api/v1/user',
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
    // bookOwner: builder.mutation({
    //   query: OwnerId => ({
    //     url: '/bookOwner',
    //     method: 'POST',
    //     body: OwnerId, // Assuming the server expects an object with an `id` field
    //   }),
    // }),
    bookOwner: builder.mutation({
      query: OwnerId => ({
        url: '/bookOwner',
        method: 'POST',
        body: OwnerId,
      }),
    }),
    forgotPassword: builder.mutation({
      query: data => ({
        url: './forgotPassword',
        method: 'POST',
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: data => ({
        url: './resetPassword',
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useLazyLogoutUserQuery,
  useBookOwnerMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation
} = userApi;
