import React from "react";
import { userReducer, userInitialState } from "../reducers/userReducer";

export const UserContext = React.createContext({
    userReducer,
    state: userInitialState,
});
