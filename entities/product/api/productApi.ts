import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import OpenAI from 'openai';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  endpoints: (builder) => ({
    getChat: builder.mutation<any, {
      messages: OpenAI.Chat.ChatCompletionMessageParam[]
    }>({
      query: (body) => ({
        url: '/api/chat',
        method: 'POST',
        body,
      })
    })
  })
});

export const {
  useGetChatMutation,
} = productApi;