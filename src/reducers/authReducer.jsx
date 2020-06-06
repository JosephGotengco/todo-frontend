export const authInitialState = {
    isLoggedIn: false,
    isLoggingIn: false,
    isRegistering: false,
    loginErrMsg: "",
	registerErrMsg: "",
    isApiDown: false,
    isChecking: true,
};

export const authReducer = (state, action) => {
    try {
        switch (action.type) {
            case "login":
                return { ...state, isLoggedIn: true, isChecking: false };
            case "register":
                return { ...state, isLoggedIn: true, isChecking: false };
            case "done_checking":
                return { ...state, isChecking: false };
            case "logout":
                return { ...state, isLoggedIn: false };
            case "logging_in":
                return { ...state, isLoggingIn: true };
            case "registering":
				return { ...state, isRegistering: true };
			case "api_call_done":
				return { ...state, isRegistering: false, isLoggingIn: false };
            case "set_login_err_msg":
                return { ...state, loginErrMsg: action.payload };
            case "set_register_err_msg":
                return { ...state, registerErrMsg: action.payload };
            case "clear_login_err_msg":
                return { ...state, loginErrMsg: "" };
            case "clear_register_err_msg":
				return { ...state, registerErrMsg: "" };
			case "api_is_down":
				const serverDownMsg = "Sorry, looks like the server is down. Please try later.";
				return { ...state, isApiDown: true, loginErrMsg: serverDownMsg, registerErrMsg: serverDownMsg };
            default:
                throw new Error();
        }
    } catch (e) {
        console.error(`${action.type} is not supported by authReducer!!!`);
    }
};
