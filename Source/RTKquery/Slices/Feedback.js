import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const FeedbackApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    // http://localhost:4000/api/v1/user/login
    // baseUrl: 'http://192.168.137.1:4000/api/v1/feedback',
    baseUrl: 'http://192.168.186.190:4000/api/v1/feedback',
  }),
  endpoints: builder => ({
    sendFeedback: builder.mutation({
      query: data => ({
        url: '/sendFeedback',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {useSendFeedbackMutation} = FeedbackApi;
