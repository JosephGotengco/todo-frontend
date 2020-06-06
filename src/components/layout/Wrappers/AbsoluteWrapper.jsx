import React from "react";
import styled from "styled-components";
import withThemeContext from "../../../hocs/withThemeContext";
import { StyledWrapper } from "./Wrapper";

export const StyledAbsoluteWrapper = styled(StyledWrapper)`
    position: absolute;
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    height: ${(props) => props.height};
    width: ${(props) => props.width};

    display: flex;
    flex-direction: ${(props) => props.direction};
`;

const AbsoluteWrapper = (props) => {
    const { theme, ...otherProps } = props;
    return (
        <StyledAbsoluteWrapper font={theme.font} {...otherProps}>
            {props.children}
        </StyledAbsoluteWrapper>
    );
};

export default withThemeContext(AbsoluteWrapper);
