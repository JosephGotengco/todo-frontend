import React from "react";
import styled from "styled-components";
import WithThemeContext from "../../hocs/withThemeContext";

const StyledLabel = styled.label`
    margin-block-start: 0em;
    margin-block-end: 0em;
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize || "14px"};
	font-weight: 600;
	cursor: ${(props) => props.cursor};
`;

const Label = (props) => {
    const { theme, children, ...otherProps } = props;
    return (
        <StyledLabel color={theme.black2} {...otherProps}>
            {children}
        </StyledLabel>
    );
};

export default WithThemeContext(Label);
