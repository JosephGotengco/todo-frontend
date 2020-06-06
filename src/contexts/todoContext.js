import React from "react";
import { todoReducer, todoInitialState } from "../reducers/todoReducer";

export const TodoContext = React.createContext({
    todoReducer,
    todoInitialState,
});
