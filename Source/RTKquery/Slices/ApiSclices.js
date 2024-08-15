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
  }),
});

export const {useGetUserQuery, useLoginUserMutation} = api;
