import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentType } from "@/store/reducers/comments/commentsApi"

export interface CommentWithAnswers {
    comment: CommentType,
    answers: CommentType[]
}

const initialState: CommentWithAnswers[] = []

const commentsSlice = createSlice({
    name: "comments",
    initialState: initialState,
    reducers: {
        setComments: (state, action: PayloadAction<CommentWithAnswers[]>) => {
            action.payload.forEach((elem) => state.push(elem));
        },
        setComment: (state, action: PayloadAction<CommentWithAnswers>) => {
            state.push(action.payload);
        },
        resetComments: () => initialState
    }
})


export const commentsReducer = commentsSlice.reducer;
export const commentsActions = commentsSlice.actions;