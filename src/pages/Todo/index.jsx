import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Row from "../../components/layout/Row";
import { StyledWrapper } from "../../components/layout/Wrappers/Wrapper";
import FlexWrapper from "../../components/layout/Wrappers/FlexWrapper";
import Fonts from "../../components/typography";
import WithThemeContext from "../../hocs/withThemeContext";
import Card from "../../components/layout/Card";
import Wrapper from "../../components/layout/Wrappers/Wrapper";
import Button from "../../components/forms/Button";
import hexToRGB from "../../helpers/hexToRGB";
import TodoItem from "./sections/TodoItem";
import devices from "../../common/sizes";
import { useMediaQuery } from "react-responsive";
import AddTodoItemModel from "./sections/AddTodoItemModal";
import WithAuthContext from "../../hocs/withAuthContext";
import WithTodoContext from "../../hocs/withTodoContext";
import { logout, checkIfLoggedIn } from "../../actions/authActions";
import { deleteTodo } from "../../actions/todoActions";
import { withSnackbar } from "notistack";

const TodoWrapper = styled(StyledWrapper)`
    width: 100%;
    overflow-x: hidden;
`;

const TodoPage = (props) => {
    const { theme, auth, todo, enqueueSnackbar } = props;
    const todos = todo.state.todos;

    const [isModalOpen, toggleModal] = useState(false);
    const [animDelay, setAnimDelay] = useState(false);

    const isTabletOrBigger = useMediaQuery({ query: devices.tablet });

    const handleLogout = () => {
        const onLogout = async () => {
            const response = await logout();
            if (response.status) {
                auth.dispatch({ type: "logout" });
            }
        };

        onLogout();
    };

    const handleDeleteTodo = (index) => {
        const onDeleteTodo = async () => {
            const { message, done } = todos[index];
            const data = await deleteTodo({ message, done });
            const newTodos = data.user.todos;
            if (newTodos) {
                todo.dispatch({ type: "set_todos", payload: newTodos });
                enqueueSnackbar("Todo deleted!");
            }
        };

        onDeleteTodo();
    };

    useEffect(() => {
        const startingTime = 100;
        const animDelays = [startingTime];
        const interval = 150;
        todos.forEach((todo, i) => {
            animDelays.push(animDelays[i] + interval);
        });
        setAnimDelay([...animDelays]);
    }, [todos]);

    useEffect(() => {
        const attemptLogin = async () => {
            const data = await checkIfLoggedIn();
            console.log("atemptLogin,", data);
            const todos = data.user.todos || [];
            console.log("TODOS FROM TODO PAGE", todos);
            todo.dispatch({ type: "set_todos", payload: todos });
        };

        attemptLogin();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Row>
            <TodoWrapper
                bg={theme.grey4}
                color={theme.black2}
                font={theme.font}
                minHeight={"100vh"}
            >
                <Row justify={"center"} mTop={"30px"}>
                    <Card
                        bg={theme.white1}
                        width={"750px"}
                        minHeight={isTabletOrBigger ? "575px" : "360px"}
                        rounded={true}
                        mTop={"20px"}
                    >
                        <Row
                            justify={"space-between"}
                            pLeft={"30px"}
                            pRight={"30px"}
                            pTop={"20px"}
                            mBottom={"40px"}
                        >
                            <Wrapper>
                                <Row>
                                    <Fonts.H2>ToDos</Fonts.H2>
                                    <Button
                                        title={"Add Todo"}
                                        width={"100px"}
                                        height={"30px"}
                                        bg={theme.green3}
                                        titleColor={theme.white1}
                                        boxShadow={hexToRGB(theme.green3, 0.25)}
                                        mLeft={"15px"}
                                        onClick={() => toggleModal(true)}
                                    />
                                </Row>
                            </Wrapper>

                            <AddTodoItemModel
                                isOpen={isModalOpen}
                                closeModal={() => toggleModal(false)}
                            />
                            <Button
                                title={"Logout"}
                                width={"100px"}
                                height={"30px"}
                                bg={theme.black1}
                                titleColor={theme.white1}
                                boxShadow={hexToRGB(theme.black1, 0.25)}
                                onClick={() => handleLogout()}
                            />
                        </Row>
                        <Row>
                            <Wrapper width={"100%"}>
                                {todos.length > 0 ? (
                                    todos.map((todo, index) => {
                                        return (
                                            <TodoItem
                                                title={todo.message}
                                                done={todo.done}
                                                delay={animDelay[index]}
                                                key={todo.id}
                                                onToggleDone={() => {
                                                    handleDeleteTodo(index);
                                                }}
                                            />
                                        );
                                    })
                                ) : (
                                    <FlexWrapper>
                                        <Fonts.H2>
                                                You curren't don't have any ToDos
                                        </Fonts.H2>
                                        <Fonts.H2>
                                                Click on the "Add Todo" button to add some!
                                        </Fonts.H2>
                                    </FlexWrapper>
                                )}
                            </Wrapper>
                        </Row>
                    </Card>
                </Row>
            </TodoWrapper>
        </Row>
    );
};

export default WithThemeContext(
    WithAuthContext(WithTodoContext(withSnackbar(TodoPage)))
);
