import React, { Component } from "react";
import ErrorImage from "../../images/error.png";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }


    render() {
		if (this.state.hasError) {
			console.log("ERROR")
            // You can render any custom fallback UI
            // eslint-disable-next-line react/react-in-jsx-scope
			return <img src={ErrorImage} alt="error" />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
