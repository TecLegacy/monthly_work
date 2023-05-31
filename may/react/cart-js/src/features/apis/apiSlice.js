import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  tagTypes: ['Post'],
  endpoints: builder => ({
    getAllPosts: builder.query({
      query: () => `/posts`,
      providesTags: (result = []) => {
        // console.log('lkkk', result);
        // console.log('ss', [
        //   'Post',
        //   ...result.posts.map(({ id }) => ({ type: 'Post', id })),
        // ]);
        return [
          'Post',
          ...result.posts.map(({ id }) => ({ type: 'Post', id })),
        ];
      },
    }),
    getPost: builder.query({
      query: id => `/posts/${id}`,
      providesTags: (result, error, arg) => [{ type: 'Post', id: arg }],
    }),
    editPost: builder.mutation({
      query: post => ({
        url: `posts/${post.id}`,
        method: 'PATCH',
        body: post,
      }),
      invalidatesTags: (result, error, arg) => {
        console.log('arg', arg);
        return [{ type: 'Post', id: arg.id }];
      },
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostQuery, useEditPostMutation } =
  postApiSlice;
