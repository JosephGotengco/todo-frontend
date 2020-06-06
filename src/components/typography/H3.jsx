import React from "react";
import styled from "styled-components";
import WithThemeContext from "../../hocs/withThemeContext";
import PropTypes from "prop-types";

const StyledH3 = styled.h3`
    margin-block-start: 0em;
    margin-block-end: 0em;
    color: ${(props) => props.color};
    width: ${(props) => props.width};
    font-size: 16px;
    font-weight: 500;
    padding: 12px 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-decoration: ${(props) => props.striked && "line-through"};
    transition: all 0.2s;
    padding: ${(props) =>
        `${props.pTop} ${props.pRight} ${props.pBottom} ${props.pLeft}`};
    margin: ${(props) =>
        `${props.mTop} ${props.mRight} ${props.mBottom} ${props.mLeft}`};
`;

const H3 = (props) => {
    const { theme, children, ...otherProps } = props;
    return (
        <StyledH3 color={theme.black2} {...otherProps}>
            {children}
        </StyledH3>
    );
};

H3.defaultProps = {
    mTop: "0px",
    mRight: "0px",
    mBottom: "0px",
    mLeft: "0px",
    pTop: "0px",
    pRight: "0px",
    pBottom: "0px",
    pLeft: "0px",
};

H3.propTypes = {
    mTop: PropTypes.string,
    mRight: PropTypes.string,
    mBottom: PropTypes.string,
    mLeft: PropTypes.string,
    pTop: PropTypes.string,
    pRight: PropTypes.string,
    pBottom: PropTypes.string,
    pLeft: PropTypes.string,
};


export default WithThemeContext(H3);
