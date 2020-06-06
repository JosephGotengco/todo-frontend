import React from "react";
import styled from "styled-components";
import WithThemeContext from "../../hocs/withThemeContext";
const StyledLinkBreak = styled.div`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "1px"};
    background-color: ${(props) => props.bg};
`;

const LineBreak = (props) => {
    return <StyledLinkBreak {...props} />;
};

export default WithThemeContext(LineBreak);
