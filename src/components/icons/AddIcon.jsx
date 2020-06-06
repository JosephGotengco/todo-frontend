import React from "react";
import styled from "styled-components";
import { Add } from "@styled-icons/material-rounded";

const StyledAddIcon = styled(Add)`
    color: ${(props) => props.color};
    height: 15px;
    width: 15px;
`;

const AddIcon = (props) => <StyledAddIcon {...props} />;

export default AddIcon;
