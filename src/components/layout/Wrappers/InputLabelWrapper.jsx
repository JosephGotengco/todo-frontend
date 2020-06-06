import React from "react";
import styled from "styled-components";
import withThemeContext from "../../../hocs/withThemeContext";
import { StyledWrapper } from "./Wrapper";

export const StyledInputLabelWrapper = styled(StyledWrapper)`
    position: relative;

    p {
        position: absolute;
        top: ${(props) => `${props.labelY}` && "11px"};
        left: ${(props) => `${props.labelX}` && "15px"};
        transition: 300ms all;
        pointer-events: none;
    }

    input {
        &:valid + p {
            top: ${(props) => `-${props.newLabelY}` && "-17px"};
            left: ${(props) => `${props.labelX}` && "10px"};
        }
        &:focus + p {
            top: ${(props) => `-${props.newLabelY}` && "-17px"};
            left: ${(props) => `${props.labelX}` && "10px"};
        }
        &:not([placeholder=""]) {
            top: ${(props) => `-${props.newLabelY}` && "-17px"};
            left: ${(props) => `${props.labelX}` && "10px"};
        }
    }
`;

const FlexWrapper = (props) => {
    const { theme, ...otherProps } = props;
    return (
        <StyledInputLabelWrapper {...otherProps}>
            {props.children}
        </StyledInputLabelWrapper>
    );
};

export default withThemeContext(FlexWrapper);
