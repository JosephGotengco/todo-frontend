import React from 'react';
import styled from "styled-components";
import CloseIcon from "../icons/CloseIcon";
import PropTypes from "prop-types";
// import SuccessIcon from "../icons/SuccessIcon";
// import WarningIcon from "../icons/WarningIcon";
import Fonts from "../typography";
import WithThemeContext from "../../hocs/withThemeContext";

export const AlertWrapper = styled.div`
    width: 350px;
    overflow: hidden;
    height: 50px;
    background-color: ${(props) => props.bg || "#46c93a"};
    border-radius: 0.25rem;
    border: 1px solid #f1f2f6
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px 0 15px;
    color: #fff;
    font-size: 14px;
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
    transition: all 0.3s;

    &:hover {
        transform: translateY(5px);
    }

`;

const Alert = React.forwardRef(({...props }, ref) => {
    const { id, msg, closeSnackbar } = props;

    return (
        <AlertWrapper
            ref={ref}
            id={id}
            bg={msg.includes("delete") ? "#FF4757" : "#46c93a"}
            {...props}
        >
            <Fonts.Body color={"#fff"}>{msg}</Fonts.Body>
            <CloseIcon onClick={() => closeSnackbar(id)} />
        </AlertWrapper>
    );
});

Alert.propTypes = {
    deleteAlert: PropTypes.func,
    icon: PropTypes.oneOf(["success", "info", "warning", "danger"]),
    msg: PropTypes.string,
    id: PropTypes.number,
    timeout: PropTypes.number,
    closeSnackbar: PropTypes.func,
    getIcon: PropTypes.func,
    ref: PropTypes.object,
};

Alert.defaultProps = {
    type: "success",
    msg: "Alert Text Goes Here",
};

export default Alert;
