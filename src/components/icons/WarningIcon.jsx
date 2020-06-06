import React from "react";
import styled from "styled-components";
import { Warning } from "@styled-icons/icomoon";

const StyledWarningIcon = styled(Warning)`
	color: ${(props) => props.color};
	margin: 0px ${(props) => props.mHor};
    height: 15px;
    width: 15px;
`;

const WarningIcon = (props) => <StyledWarningIcon {...props} />;

export default WarningIcon;
