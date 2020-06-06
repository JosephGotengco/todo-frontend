import React from "react";
import styled from "styled-components";
import Fonts from "../typography";
import LoadingIcon from "../icons/LoadingIcon";
import withThemeContext from "../../hocs/withThemeContext";
import PropTypes from "prop-types";
import Ripple from "./Ripple";

export const StyledButton = styled.button`
    // get rid of default css
    border: none;
    outline: none;

    border-radius: 15px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.bg};
    margin: ${(props) =>
        `${props.mTop} ${props.mRight} ${props.mBottom} ${props.mLeft}`};
    padding: ${(props) =>
        `${props.pTop} ${props.pRight} ${props.pBottom} ${props.pLeft}`};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
    overflow: hidden;
    user-select: none;
    -webkit-tap-highlight-color: none;
    transform: translateY(-3px);
    &:active {
        box-shadow: none;
        transform: translateY(0px);
    }

    ${(props) =>
        !props.loading &&
        `
            box-shadow: 0 10px 20px -10px ${
                props.boxShadow || "rgba(40, 43, 49, 0.5)"
            };
        `}
`;

const Button = (props) => {
    const { theme, title, loading, ...otherProps } = props;

    return (
        <StyledButton
            font={theme.font}
            loading={loading ? 1 : 0}
            {...otherProps}
        >
            {loading ? (
                <LoadingIcon color={theme.white1} />
            ) : (
                <>
                    <Fonts.Body
                        color={props.titleColor || theme.white1}
                        fontSize={".8rem"}
                        cursor={"  "}
                    >
                        {title}
                    </Fonts.Body>
                </>
            )}
            <Ripple />
        </StyledButton>
    );
};

Button.defaultProps = {
    mTop: "0px",
    mRight: "0px",
    mBottom: "0px",
    mLeft: "0px",
    pTop: "0px",
    pRight: "0px",
    pBottom: "0px",
    pLeft: "0px",
};

Button.propTypes = {
    mTop: PropTypes.string,
    mRight: PropTypes.string,
    mBottom: PropTypes.string,
    mLeft: PropTypes.string,
    pTop: PropTypes.string,
    pRight: PropTypes.string,
    pBottom: PropTypes.string,
    pLeft: PropTypes.string,
};

export default withThemeContext(Button);
