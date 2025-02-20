import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { userActions } from "@/store/reducers/user/userSlice";

const actions = {
    ...userActions,
};

export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};