import React from 'react';
import styled from "styled-components";
import WithThemeContext from "../../hocs/withThemeContext";
import PropTypes from "prop-types";

const StyledH1 = styled.h1`
    margin-block-start: 0em;
    margin-block-end: 0em;
    color: ${(props) => props.color};
    font-size: 28px;
    font-weight: 600;
    padding: ${(props) =>
        `${props.pTop} ${props.pRight} ${props.pBottom} ${props.pLeft}`};
    margin: ${(props) =>
        `${props.mTop} ${props.mRight} ${props.mBottom} ${props.mLeft}`};
`;

const H1 = (props) => {
	const { theme, children, ...otherProps } = props;
	return <StyledH1 color={theme.black2} {...otherProps}>{children}</StyledH1>;
}

H1.defaultProps = {
    mTop: "0px",
    mRight: "0px",
    mBottom: "0px",
    mLeft: "0px",
    pTop: "0px",
    pRight: "0px",
    pBottom: "0px",
    pLeft: "0px",
};

H1.propTypes = {
    mTop: PropTypes.string,
    mRight: PropTypes.string,
    mBottom: PropTypes.string,
    mLeft: PropTypes.string,
    pTop: PropTypes.string,
    pRight: PropTypes.string,
    pBottom: PropTypes.string,
    pLeft: PropTypes.string,
};

export default WithThemeContext(H1);
