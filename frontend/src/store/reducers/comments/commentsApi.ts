import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NewCommentSlice } from './newCommentSlice';

const baseUrl = "https://66a61d7f23b29e17a1a1c4ea.mockapi.io/"

export interface CommentType {
    id: number,
    author: string,
    message: string,
    likes: number,
    answersCount?: number,
    parentId?: number
}

// ToDo { подумать что отдавать на бек }
export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['CREATE'],
    endpoints: (builder) => ({
        getComments: builder.query<CommentType[], void>({
            query: () => `comments`,
            providesTags: ['CREATE']
        }),
        getAnswers: builder.query<CommentType[], number>({
            query: (id) => `answers?parentId=${id}`,
            providesTags: ['CREATE']
        }),
        createComment: builder.mutation<void, NewCommentSlice>({
            query: ({isAnswer, comment}) => ({
                url: `${isAnswer ? 'answers' : 'comments'}`,
                method: 'POST',
                body: comment
            }),
            invalidatesTags: ['CREATE']
        }),
    }),
})

export const { 
    useGetCommentsQuery,
    useGetAnswersQuery,
    useCreateCommentMutation,
} = commentsApi;