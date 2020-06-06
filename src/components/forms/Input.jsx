import React from "react";
import styled from "styled-components";
import withThemeContext from "../../hocs/withThemeContext";
import PropTypes from "prop-types";

const StyledInput = styled.input`
    border: 0px;
    outline: none;
    border-radius: 10px;
    color: ${(props) => props.color};
    background-color: ${(props) => props.bg};
    font-size: 12px;
    font-family: "${(props) => props.font}", sans-serif;
    font-weight: 500;
    padding: 10px 15px;
    padding-left: 10px;
    width: ${(props) => props.width || "225px"};
    transition: all 0.2s;
    margin: ${(props) =>
        `${props.mTop} ${props.mRight} ${props.mBottom} ${props.mLeft}`};
    &::placeholder {
        color: ${(props) => props.placeholderColor};
        transition: all 0.2s ease;
        padding-left: 5px;
    }

    &:active, &:focus {
        padding-left: 15px;
    }

    &:focus::placeholder, &:not(:focus):valid::placeholder {
        translateX(10px);
        opacity: 0;
    }
`;

const Input = (props) => {
    const { theme, handleChange, value, ...otherProps } = props;

    return (
        <StyledInput
            bg={theme.grey5}
            placeholderColor={theme.grey6}
            color={theme.black1}
            font={theme.font}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            {...otherProps}
        />
    );
};


Input.defaultProps = {
    mTop: "0px",
    mRight: "0px",
    mBottom: "0px",
    mLeft: "0px",
};

Input.propTypes = {
    mTop: PropTypes.string,
    mRight: PropTypes.string,
    mBottom: PropTypes.string,
    mLeft: PropTypes.string,
};

export default withThemeContext(Input);
