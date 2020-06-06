import React from "react";
import styled from "styled-components";
import { ExitToApp } from "@styled-icons/material-rounded";

const StyledLogoutIcon = styled(ExitToApp)`
    color: ${(props) => props.color};
    height: 15px;
    width: 15px;
`;

const LogoutIcon = (props) => <StyledLogoutIcon {...props} />;

export default LogoutIcon;
