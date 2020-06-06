export const todoInitialState = {
    todos: [],
    addTodoErrMsg: "",
    addTodoSuccessMsg: "",
    isAddingTodo: false,
};

export const todoReducer = (state, action) => {
    try {
        switch (action.type) {
            case "set_todos":
                return { ...state, todos: [...action.payload] };
            case "adding_todo":
                return { ...state, isAddingTodo: true };
            case "api_call_done":
                return { ...state, isAddingTodo: false };
            case "set_add_todo_err_msg":
                return { ...state, addTodoErrMsg: action.payload };
            case "clear_add_todo_err_msg":
                return { ...state, addTodoErrMsg: "" };
            default:
                throw new Error();
        }
    } catch (e) {
        console.error(`${action.type} is not supported by todoReducer!!!`);
    }
};
