import React from "react";
import styled from "styled-components";
import WithThemeContext from "../../hocs/withThemeContext";
import PropTypes from "prop-types";

const StyledBody = styled.p`
    margin-block-start: 0em;
    margin-block-end: 0em;
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize || "14px"};
    font-weight: ${(props) => props.weight || "400"};
    font-family: ${(props) => props.font || "Poppins"};
    cursor: ${(props) => props.cursor};
    padding: ${(props) =>
        `${props.pTop} ${props.pRight} ${props.pBottom} ${props.pLeft}`};
    margin: ${(props) =>
        `${props.mTop} ${props.mRight} ${props.mBottom} ${props.mLeft}`};
`;

const Body = (props) => {
    const { theme, children, ...otherProps } = props;
    return (
        <StyledBody color={theme.black2} {...otherProps}>
            {children}
        </StyledBody>
    );
};

Body.defaultProps = {
    mTop: "0px",
    mRight: "0px",
    mBottom: "0px",
    mLeft: "0px",
    pTop: "0px",
    pRight: "0px",
    pBottom: "0px",
    pLeft: "0px",
};

Body.propTypes = {
    mTop: PropTypes.string,
    mRight: PropTypes.string,
    mBottom: PropTypes.string,
    mLeft: PropTypes.string,
    pTop: PropTypes.string,
    pRight: PropTypes.string,
    pBottom: PropTypes.string,
    pLeft: PropTypes.string,
};

export default WithThemeContext(Body);
