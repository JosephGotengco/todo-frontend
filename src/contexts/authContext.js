import React from "react";
import { authReducer, authInitialState } from "../reducers/authReducer";

export const AuthContext = React.createContext({authReducer, authInitialState});
