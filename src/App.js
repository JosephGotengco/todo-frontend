import React, { useEffect, useReducer } from "react";
import "./common/body.css";
import "./common/fonts.css";
import themes from "./common/themes";
import { ThemeContext } from "./contexts/themeContext";
import { authReducer, authInitialState } from "./reducers/authReducer";
import { todoReducer, todoInitialState } from "./reducers/todoReducer";
import { AuthContext } from "./contexts/authContext";
import { TodoContext } from "./contexts/todoContext";
import ErrorBoundary from "./components/errors/ErrorBoundary";
import { SnackbarProvider } from "notistack";
import Alert from "./components/common/Alert";

import AuthPage from "./pages/Auth/";
import TodoPage from "./pages/Todo/";

const notistackRef = React.createRef();
const onClickDismiss = (key) => {
    notistackRef.current.closeSnackbar(key);
};

const TodoApp = () => {
    const [authState, authDispatch] = useReducer(authReducer, authInitialState);
    const [todoState, todoDispatch] = useReducer(todoReducer, todoInitialState);

    useEffect(() => {
        // change document title
        document.title = `Todo List`;
    });

    return (
        <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
            ref={notistackRef}
            content={(key, message, options) => (
                <Alert
                    id={key}
                    msg={message}
                    closeSnackbar={onClickDismiss}
                    {...options}
                />
            )}
        >
            <ErrorBoundary>
                <ThemeContext.Provider value={themes.main}>
                    <AuthContext.Provider
                        value={{ state: authState, dispatch: authDispatch }}
                    >
                        <TodoContext.Provider
                            value={{ state: todoState, dispatch: todoDispatch }}
                        >
                            {authState.isLoggedIn ? <TodoPage /> : <AuthPage />}
                        </TodoContext.Provider>
                    </AuthContext.Provider>
                </ThemeContext.Provider>
            </ErrorBoundary>
        </SnackbarProvider>
    );
};

export default TodoApp;
