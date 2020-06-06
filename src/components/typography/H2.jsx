import React from "react";
import styled from "styled-components";
import WithThemeContext from "../../hocs/withThemeContext";

const StyledH2 = styled.h2`
    margin-block-start: 0em;
    margin-block-end: 0em;
    color: ${(props) => props.color};
    font-size: 18px;
    font-weight: 500;
    position: relative;
    &::before {
        content: "";
        width: 0%;
        height: 2px;
        background-color: ${(props) => props.color};
        position: absolute;
        bottom: -5%;
        transition: width 0.2s ease-in-out;
    }
    ${(props) =>
        props.underlined &&
        `
        &::before {
            content: "";
            width: 100%;
            height: 2px;
            background-color: ${props.color};
            position: absolute;
            bottom: -5%;
            border-radius: 15px;
        }
        `}
    &:hover {
        cursor: pointer;
    }
`;

const H2 = (props) => {
    const { theme, children, ...otherProps } = props;
    return (
        <StyledH2 color={theme.black2} {...otherProps}>
            {children}
        </StyledH2>
    );
};

export default WithThemeContext(H2);
