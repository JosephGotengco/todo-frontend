import React from "react";
import styled from "styled-components";
import withThemeContext from "../../../hocs/withThemeContext";
import { StyledWrapper } from "./Wrapper";

export const StyledFlexWrapper = styled(StyledWrapper)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`;

const FlexWrapper = (props) => {
    const { theme, ...otherProps } = props;
    return (
        <StyledFlexWrapper font={theme.font} {...otherProps}>
            {props.children}
        </StyledFlexWrapper>
    );
};

export default withThemeContext(FlexWrapper);
