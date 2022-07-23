import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://jsonplaceholder.typicode.com`,
    prepareHeaders: (headers, { getState, endpoint, ...sss }) => {
      const key = getState().api.key;

      if (key) {
        headers.set('authorization', `Bearer ${key}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Posts'],
  endpoints: (builder, ss) => {
    return {
      getPosts: builder.query({
        query: () => `/posts`,
        providesTags: (result) =>
          result
            ? [
                ...result.map(({ id }) => ({ type: 'Posts', id })),
                { type: 'Posts', id: 'LIST' },
              ]
            : [{ type: 'Posts', id: 'LIST' }],
      }),
      addPost: builder.mutation({
        query: ({ id, ...patch }) => {
          return {
            url: `/posts`,
            method: 'POST',
            body: patch,
          };
        },
        //invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
        async onQueryStarted(patch, { dispatch, queryFulfilled }) {
          try {
            const { data: addedPost } = await queryFulfilled;
            dispatch(
              postsApi.util.updateQueryData(
                'getPosts',
                undefined,
                (draftPosts) => {
                  draftPosts.unshift(addedPost);
                }
              )
            );
          } catch {}
        },
      }),
    };
  },
});

export const { useGetPostsQuery, useAddPostMutation } = postsApi;
