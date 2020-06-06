import React from "react";
import styled from "styled-components";
import withThemeContext from "../../../hocs/withThemeContext";
import PropTypes from "prop-types";

export const StyledWrapper = styled.div`
    width: ${(props) => props.width};
    max-width: ${(props) => props.maxWidth};
    min-height: ${(props) => props.minHeight};
    background-color: ${(props) => props.bg || "none"};
    font-family: "${(props) => props.font}", sans-serif;
    position: relative;
    margin: ${(props) =>
        `${props.mTop} ${props.mRight} ${props.mBottom} ${props.mLeft}`};
    padding: ${(props) =>
        `${props.pTop} ${props.pRight} ${props.pBottom} ${props.pLeft}`};
    display: flex;
    justify-content: ${(props) => props.justify};
    align-items: ${(props) => props.align};
    flex-direction: column;
`;

const Wrapper = (props) => {
	const { theme, ...otherProps } = props;
	return <StyledWrapper font={theme.font} {...otherProps}>{props.children}</StyledWrapper>
}

Wrapper.defaultProps = {
    mTop: "0px",
    mRight: "0px",
    mBottom: "0px",
    mLeft: "0px",
    pTop: "0px",
    pRight: "0px",
    pBottom: "0px",
    pLeft: "0px",
};

Wrapper.propTypes = {
    mTop: PropTypes.string,
    mRight: PropTypes.string,
    mBottom: PropTypes.string,
    mLeft: PropTypes.string,
    pTop: PropTypes.string,
    pRight: PropTypes.string,
    pBottom: PropTypes.string,
    pLeft: PropTypes.string,
};

export default withThemeContext(Wrapper);
