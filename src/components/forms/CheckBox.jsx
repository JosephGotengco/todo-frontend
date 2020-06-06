import React, { useState } from "react";
import styled from "styled-components";
import withThemeContext from "../../hocs/withThemeContext";
import PropTypes from "prop-types";

const StyledCheckBox = styled.div`
    height: 23px;
    width: 23px;
    border-radius: 9px;
    background-color: ${(props) => props.bg || "#E6E9EA"};
    position: relative;
    cursor: pointer;
    margin: ${(props) =>
        `${props.mTop} ${props.mRight} ${props.mBottom} ${props.mLeft}`};
    padding: ${(props) =>
        `${props.pTop} ${props.pRight} ${props.pBottom} ${props.pLeft}`};
`;

const StyledCheckMarkMask = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 9px;
    background-color: ${(props) =>
        props.value ? props.bg || "#1A5CFF" : "none"};
    transform: scale(${(props) => (props.value ? 1 : 0)});
    transition: all 0.25s ease;
`;

const StyledCheckMarkWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const StyledCheckMarkCon = styled.div`
    position: absolute;
    height: 13px;
    width: 8px;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
`;

const CheckMarkLine1 = styled.div`
    content: "";
    position: absolute;
    height: 1.5px;
    width: ${(props) => (props.value ? "5px" : "0px")};
    background: #fff;
    transition: all .25s ease;
    border-radius: 5px 0 0 5px;
    bottom: 2px;
    transition-delay: ${(props) => (props.value ? "0s" : "0.18s")};
}
`;

const CheckMarkLine2 = styled.div`
    content: "";
    position: absolute;
    width: 0;
    height: ${(props) => (props.value ? "10px" : "0px")};
    width: 1.5px;
    background: #fff;
    transition: all 0.25s ease;
    border-radius: 5px 0 0 5px;
    left: 3px;
    bottom: 3px;
    transition-delay: ${(props) => (props.value ? "0.18s" : "0")};
`;

const CheckBox = (props) => {
    const { theme, onChange, value, bg, ...otherProps } = props;

    const [innerValue, toggleValue] = useState(value);

    const handleChange = () => {
        onChange(!innerValue);
        toggleValue(!innerValue);
    };

    return (
        <StyledCheckBox
            onClick={handleChange}
            type={"checkbox"}
            value={innerValue}
            {...otherProps}
        >
            <StyledCheckMarkMask value={innerValue}>
                <StyledCheckMarkWrapper>
                    <StyledCheckMarkCon bg={bg}>
                        <CheckMarkLine1 value={innerValue} />
                        <CheckMarkLine2 value={innerValue} />
                    </StyledCheckMarkCon>
                </StyledCheckMarkWrapper>
            </StyledCheckMarkMask>
        </StyledCheckBox>
    );
};

CheckBox.propTypes = {
    mTop: PropTypes.string,
    mRight: PropTypes.string,
    mBottom: PropTypes.string,
    mLeft: PropTypes.string,
    pTop: PropTypes.string,
    pRight: PropTypes.string,
    pBottom: PropTypes.string,
    pLeft: PropTypes.string,
    onChange: PropTypes.func,
};

CheckBox.defaultProps = {
    mTop: "0px",
    mRight: "0px",
    mBottom: "0px",
    mLeft: "0px",
    pTop: "0px",
    pRight: "0px",
    pBottom: "0px",
    pLeft: "0px",
    onChange: () => {},
};

export default withThemeContext(CheckBox);
