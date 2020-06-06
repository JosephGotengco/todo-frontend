import React from "react";
import styled from "styled-components";
import withThemeContext from "../../hocs/withThemeContext";
import PropTypes from "prop-types";

export const StyledRow = styled.div`
    width: 100%;
    max-width: ${(props) => props.maxWidth};
    display: flex;
    justify-content: ${(props) => props.justify};
    padding: ${(props) =>
        `${props.pTop} ${props.pRight} ${props.pBottom} ${props.pLeft}`};
    margin: ${(props) =>
        `${props.mTop} ${props.mRight} ${props.mBottom} ${props.mLeft}`};
    align-items: center;
    background-color: ${props => props.bg};
    flex-direction: row;
    word-break: break-all;
`;

const Row = (props) => {
    const { theme, ...otherProps } = props;
    return <StyledRow {...otherProps}>{props.children}</StyledRow>;
};

Row.defaultProps = {
    mTop: "0px",
    mRight: "0px",
    mBottom: "0px",
    mLeft: "0px",
    pTop: "0px",
    pRight: "0px",
    pBottom: "0px",
    pLeft: "0px",
};

Row.propTypes = {
    mTop: PropTypes.string,
    mRight: PropTypes.string,
    mBottom: PropTypes.string,
    mLeft: PropTypes.string,
    pTop: PropTypes.string,
    pRight: PropTypes.string,
    pBottom: PropTypes.string,
    pLeft: PropTypes.string,
};

export default withThemeContext(Row);
