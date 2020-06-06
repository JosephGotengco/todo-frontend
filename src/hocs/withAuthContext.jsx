import React from "react";
import { AuthContext } from "../contexts/authContext";

export default function (Component) {
    return function WrappedWithContext(props) {
        return (
            <AuthContext.Consumer>
                {(context) => <Component {...props} auth={context} />}
            </AuthContext.Consumer>
        );
    };
}
