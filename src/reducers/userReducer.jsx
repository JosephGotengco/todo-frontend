export const userInitialState = {
	email: "",
};

export const userReducer = (state, action) => {
    try {
		switch (action.type) {
            case "set_user": {
                return {
                    ...state, email: action.payload
                };
            }
            default:
                throw new Error();
        }
    } catch (e) {
        console.error(`${action.type} is not supported by userReducer!!!`);
    }
};
