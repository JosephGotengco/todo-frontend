import React from "react";
import styled from "styled-components";
import { Close } from "@styled-icons/material-rounded";

const StyledCloseIcon = styled(Close)`
    color: ${(props) => props.color};
    height: 20px;
    width: 20px;
    cursor: pointer;

    &:hover {
        color: ${(props) => props.hoverColor};
    }
    &:active {
        color: ${(props) => props.hoverColor};
    }
`;

const CloseIcon = (props) => <StyledCloseIcon {...props} />;

export default CloseIcon;
