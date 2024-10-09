import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const FeedbackApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://192.168.186.190:4000/api/v1/feedback',
    baseUrl: 'https://bookshelf-server-4.onrender.com/api/v1/feedback',
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
