import React from "react";
import { TodoContext } from "../contexts/todoContext";

export default function (Component) {
    return function WrappedWithContext(props) {
        return (
            <TodoContext.Consumer>
                {(context) => <Component {...props} todo={context} />}
            </TodoContext.Consumer>
        );
    };
}
