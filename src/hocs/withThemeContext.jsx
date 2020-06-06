import React from 'react';
import {ThemeContext} from "../contexts/themeContext";

export default function (Component) {
    return function WrappedWithContext(props) {
        return (
            <ThemeContext.Consumer>
                {(context) => <Component {...props} theme={context} />}
            </ThemeContext.Consumer>
        );
    };
}
