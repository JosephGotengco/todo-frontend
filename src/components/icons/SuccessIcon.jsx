import React from "react";
import styled from "styled-components";
import { Check } from "@styled-icons/boxicons-regular";

const StyledCheckIcon = styled(Check)`
    color: ${(props) => props.color};
    margin: 0px ${(props) => props.mHor};
    height: 15px;
    width: 15px;
`;

const CheckIcon = (props) => <StyledCheckIcon {...props} />;

export default CheckIcon;
