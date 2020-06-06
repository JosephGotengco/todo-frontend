import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import ClosedIcon from "../../../components/icons/CloseIcon";
import Wrapper from "../../../components/layout/Wrappers/Wrapper";
import Row from "../../../components/layout/Row";
import Fonts from "../../../components/typography";
import Input from "../../../components/forms/Input";
import Button from "../../../components/forms/Button";
import IconButton from "../../../components/forms/IconButton";
import WithThemeContext from "../../../hocs/withThemeContext";
import WithTodoContext from "../../../hocs/withTodoContext";
import { addTodo } from "../../../actions/todoActions";
import { checkIfLoggedIn } from "../../../actions/authActions";
import WarningIcon from "../../../components/icons/WarningIcon";
import { withSnackbar } from "notistack";
import "./modal.css";

const ModalAdapter = ({ className, ...props }) => {
    const contentClassName = `${className}__content`;
    const overlayClassName = `${className}__overlay`;
    return (
        <Modal
            portalClassName={className}
            className={contentClassName}
            overlayClassName={overlayClassName}
            {...props}
        />
    );
}

const CloseButtonWrapper = styled.div`
    position: absolute;
    right: -10px;
    top: -10px;
    transition: all 0.2s;
    &:hover {
        transform: translate(-2px, 2px);
    }
`;

const StyledModal = styled(ModalAdapter)`
    &__overlay {
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background-color: rgba(0, 0, 0, 0.25);
    }

    &__content {
        position: absolute;
        width: 350px;
        height: 320px;
        left: 50%;
        top: 50%;
        padding: 0;
        border-radius: 15px;
        border: 1px solid #ccc;
        background: #fff;
        -webkit-overflow-scrolling: touch;
        outline: none;
        transform: translate(-50%, -50%) scale(0);
        transition: all 0.2s ease-in-out;
        &.ReactModal__Content--after-open {
            transform: translate(-50%, -50%) scale(1);
        }

        &.ReactModal__Content--before-close {
            transform: translate(-50%, -50%) scale(0);
        }
    }
`;

const AddTodoItemModal = (props) => {
    const { isOpen, closeModal, theme, todo, enqueueSnackbar } = props;

    const [newTodoTitle, setNewTodoTitle] = useState("");

    const handleAddTodo = () => {
        const onAddTodo = async () => {
            todo.dispatch({ type: "adding_todo" });
            const data = await addTodo(newTodoTitle);
            if (data.status) {
                const data = await checkIfLoggedIn();
                todo.dispatch({ type: "set_todos", payload: data.user.todos });
                todo.dispatch({
                    type: "clear_add_todo_err_msg",
                });
                closeModal();
                enqueueSnackbar("Todo added, congratulations!");
            } else {
                todo.dispatch({
                    type: "set_add_todo_err_msg",
                    payload: data.msg,
                });
            }
            todo.dispatch({ type: "api_call_done" });
        };

        onAddTodo();
    };

    return (
        <StyledModal
            isOpen={isOpen}
            shouldCloseOnOverlayClick
            onRequestClose={closeModal}
            ariaHideApp={false}
            closeTimeoutMS={200}
        >
            <Wrapper width={"100%"} bg={"none"}>
                <Row
                    pTop={"20px"}
                    pRight={"20px"}
                    pLeft={"20px"}
                    pBottom={"20px"}
                    justify={"center"}
                >
                    <Row width={"100%"} justify={"baseline"}>
                        <Fonts.Body>Add a</Fonts.Body>
                        <Fonts.Body weight={"500"} mLeft={".25rem"}>
                            ToDo
                        </Fonts.Body>
                    </Row>
                    <CloseButtonWrapper>
                        <IconButton
                            icon={
                                <ClosedIcon
                                    onClick={closeModal}
                                    color={theme.black3}
                                    hoverColor={theme.black1}
                                />
                            }
                        />
                    </CloseButtonWrapper>
                </Row>
                {todo.state.addTodoErrMsg.length > 0 && (
                    <Row justify={"center"} mTop={"10px"} mBottom={"20px"}>
                        <WarningIcon color={theme.red1} mHor={"5px"} />
                        <Wrapper bg={theme.white1}>
                            <Fonts.Label color={theme.red1} id="addTodoErrMsg">
                                {todo.state.addTodoErrMsg}
                            </Fonts.Label>
                        </Wrapper>
                    </Row>
                )}

                <Row justify={"center"} pTop={"30px"}>
                    <Input
                        label={"YourToDo"}
                        value={newTodoTitle}
                        handleChange={setNewTodoTitle}
                        id="newTodoMsgField"
                        placeholder={"Make a ToDo"}
                        width={"100%"}
                        mLeft={"15px"}
                        mRight={"15px"}
                        required
                    />
                </Row>
                <Row pTop={"45px"} justify={"center"}>
                    <Button
                        title={"Done"}
                        height={"35px"}
                        width={"125px"}
                        bg={theme.black1}
                        loading={todo.state.isAddingTodo}
                        onClick={handleAddTodo}
                    />
                </Row>
            </Wrapper>
        </StyledModal>
    );
};

export default WithThemeContext(
    WithTodoContext(withSnackbar(AddTodoItemModal))
);
