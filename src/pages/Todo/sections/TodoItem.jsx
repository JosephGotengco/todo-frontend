import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Row from "../../../components/layout/Row";
import Fonts from "../../../components/typography";
import Wrapper, {
    StyledWrapper,
} from "../../../components/layout/Wrappers/Wrapper";
import WithThemeContext from "../../../hocs/withThemeContext";
import CheckBox from "../../../components/forms/CheckBox";
import WithTodoContext from "../../../hocs/withTodoContext";

const TodoItemWrapper = styled(StyledWrapper)`
    transition: all 0.4s;
    animation: fadein 0.2s ease-in-out 0.2s;
    animation-delay: ${(props) => props.delay}ms;
    animation-fill-mode: forwards;
    font-family: inherit;
    font-size: inherit;
    opacity: 0;
    transform: translate(0, 20px);

    @keyframes fadein {
        0% {
            transform: translate(0, 20px);
            opacity: 0;
        }
        100% {
            transform: translate(0, 0px);
            opacity: 1;
        }
    }
`;

const SlideRightWrapper = styled.div`
    ${(props) =>
        props.slideRight &&
        `
        transition: all 0.2s;
        animation: fadeOutRight 0.2s ease-in-out 0.2s;
        animation-fill-mode: forwards;
    `}

    @keyframes fadeOutRight {
        0% {
            transform: translateX(0);
            opacity: 1;
        }
        100% {
            transform: translateX(500px);
            opacity: 0;
        }
    }
`;

const TodoItem = (props) => {
    const { done, title, theme, onToggleDone, delay } = props;

    const [internalDone, toggleDone] = useState(done);

    const handleToggleDone = () => {
        onToggleDone();
        toggleDone(!internalDone);
    };

    return (
        <TodoItemWrapper delay={delay}>
            <SlideRightWrapper slideRight={internalDone}>
                <Wrapper
                    bg={"none"}
                    align={"center"}
                    mTop={"15px"}
                    mBottom={"15px"}
                >
                    <Row width={"100%"} justify={"flex-start"}>
                        <Row maxWidth={"90%"} pLeft={"30px"}>
                            <CheckBox
                                mRight={"15px"}
                                onChange={handleToggleDone}
                                value={internalDone}
                            />
                            <Fonts.H3
                                striked={internalDone}
                                color={`${internalDone && theme.grey3}`}
                            >
                                {title}
                            </Fonts.H3>
                        </Row>
                    </Row>
                </Wrapper>
            </SlideRightWrapper>
        </TodoItemWrapper>
    );
};

TodoItem.propTypes = {
    done: PropTypes.bool,
    title: PropTypes.string,
    body: PropTypes.string,
    onToggleDone: PropTypes.func,
};

TodoItem.defaultProps = {
    done: false,
    title: "Title",
    onToggleDone: () => {},
};

export default WithThemeContext(WithTodoContext(TodoItem));
