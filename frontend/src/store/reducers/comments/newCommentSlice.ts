import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentType } from "@/store/reducers/comments/commentsApi";

// ToDo
export interface NewCommentSlice {
    isAnswer: boolean,
    comment: CommentType 
}

const initialState: NewCommentSlice = {
    isAnswer: false,
    comment: {
        id: 0,
        author: '',
        likes: 0,
        message: '',
    }
}

const newCommentSlice = createSlice({
    name: "newMessage",
    initialState: initialState,
    reducers: {
        setNewComment: (state, action: PayloadAction<NewCommentSlice>) => {
            state.isAnswer = action.payload.isAnswer;
            state.comment = Object.assign(action.payload.comment);
        },
        changeNewMessageType: (state, action: PayloadAction<boolean>) => {
            state.isAnswer = action.payload;
        },
        setParentId: (state, action: PayloadAction<number>) => {
            state.comment.parentId = action.payload;
        },
        setAnswersCount: (state, action: PayloadAction<number>) => {
            state.comment.answersCount = action.payload;
        }
    }
})


export const newCommentReducer = newCommentSlice.reducer;
export const newCommentActions = newCommentSlice.actions;