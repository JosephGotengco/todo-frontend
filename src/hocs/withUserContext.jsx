import React from "react";
import { UserContext } from "../contexts/userContext";

export default function (Component) {
    return function WrappedWithContext(props) {
        return (
            <UserContext.Consumer>
                {(context) => <Component {...props} user={context} />}
            </UserContext.Consumer>
        );
    };
}
