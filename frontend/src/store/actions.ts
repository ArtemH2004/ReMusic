import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { commentsActions } from "@/store/reducers/comments/commentsSlice";
import { newCommentActions } from "./reducers/comments/newCommentSlice";

const actions = {
    ...newCommentActions,
    ...commentsActions,
};


export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};
