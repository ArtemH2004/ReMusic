import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { userActions } from "@/store/reducers/user/userSlice";
import { songActions } from "@/store/reducers/song/songSlice";

const actions = {
    ...userActions,
    ...songActions,
};

export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};