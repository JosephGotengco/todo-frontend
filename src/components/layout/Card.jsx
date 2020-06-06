import React from "react";
import styled from "styled-components";
import withThemeContext from "../../hocs/withThemeContext";

const StyledCard = styled.div`
    background-color: ${(props) => props.bg};
    font-family: "${(props) => props.font}", sans-serif;
    min-width: ${(props) => props.minWidth};
    width: ${(props) => props.width};
    min-height: ${(props) => props.minHeight};
    border-radius: ${(props) => (props.rounded ? "35px" : "none")};
    transition: all 0.4s;

    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Card = (props) => {
    const { theme, ...otherProps } = props;
    return (
        <StyledCard bg={theme.white1} font={theme.font} {...otherProps}>
            {props.children}
        </StyledCard>
    );
};

export default withThemeContext(Card);
