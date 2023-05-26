import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: builder => ({
    getAllPosts: builder.query({
      query: () => `/posts`,
    }),
    getPost: builder.query({
      query: id => `/posts/${id}`,
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostQuery } = postApiSlice;
