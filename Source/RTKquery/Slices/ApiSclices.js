import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    
    baseUrl: 'http://192.168.137.1:4000/api/v1/user',// Getting this url form ipcongif in command prompt
    // baseUrl: 'https://bookshelf-server-4.onrender.com/api/v1/user',
    
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
      }),
    }),
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
    verifyUser: builder.mutation({
      query: data => ({
        url: './verify',
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
  useResetPasswordMutation,
  useVerifyUserMutation,
  useUpdateUserMutation,
} = userApi;
