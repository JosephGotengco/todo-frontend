import React, { useState } from "react";
import Row from "../../../components/layout/Row";
import Input from "../../../components/forms/Input";
import Button from "../../../components/forms/Button";
import WithThemeContext from "../../../hocs/withThemeContext";
import { login } from "../../../actions/authActions";
import WithAuthContext from "../../../hocs/withAuthContext";
import WithTodoContext from "../../../hocs/withTodoContext";
import WarningIcon from "../../../components/icons/WarningIcon";
import Fonts from "../../../components/typography";
import Wrapper from "../../../components/layout/Wrappers/Wrapper";
import { useMediaQuery } from "react-responsive";
import devices from "../../../common/sizes";
import InputLabelWrapper from "../../../components/layout/Wrappers/InputLabelWrapper";

const LoginSection = (props) => {
    const { auth, theme, todo } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isLaptop = useMediaQuery({ query: devices.laptopL });

    const handleLogin = async () => {
        try {
            auth.dispatch({ type: "logging_in" });
            const response = await login(email, password);
            if (response.status) {
                const todos = response.user.todos;
                todo.dispatch({ type: "set_todos", payload: todos });
                auth.dispatch({ type: "login" });
            } else {
                auth.dispatch({
                    type: "set_login_err_msg",
                    payload: response.msg,
                });
            }
            auth.dispatch({ type: "api_call_done" });
        } catch (e) {
            auth.dispatch({ type: "api_is_down" });
            auth.dispatch({ type: "api_call_done" });
        }
    };

    return (
        <>
            {auth.state.loginErrMsg.length > 0 && (
                <Row justify={"center"} mTop={"10px"} mBottom={"20px"}>
                    <WarningIcon color={theme.red1} mHor={"5px"} />
                    <Wrapper
                        maxWidth={isLaptop ? "" : "250px"}
                        bg={theme.white1}
                    >
                        <Fonts.Label color={theme.red1} id="loginErrMsg">
                            {auth.state.loginErrMsg}
                        </Fonts.Label>
                    </Wrapper>
                </Row>
            )}
            <Row justify={"center"} mTop={"20px"} mBottom={"15px"}>
                <Wrapper bg={theme.white1}>
                    <InputLabelWrapper>
                        <Input
                            value={email}
                            handleChange={setEmail}
                            id={"loginEmailField"}
                            required
                        />
                        <Fonts.Body fontSize={"12px"} color={theme.black1}>
                            Email
                        </Fonts.Body>
                    </InputLabelWrapper>
                </Wrapper>
            </Row>
            <Row justify={"center"} mTop={"15px"} mBottom={"15px"}>
                <Wrapper bg={theme.white1}>
                    <InputLabelWrapper>
                        <Input
                            value={password}
                            handleChange={setPassword}
                            id={"loginPasswordField"}
                            type={"password"}
                            required
                        />
                        <Fonts.Body fontSize={"12px"} color={theme.black1}>
                            Password
                        </Fonts.Body>
                    </InputLabelWrapper>
                </Wrapper>
            </Row>
            <Row justify={"center"} mTop={"50px"} mBottom={"50px"}>
                <Button
                    title={"Log in"}
                    height={"30px"}
                    width={"80px"}
                    bg={theme.black1}
                    titleColor={theme.white1}
                    loading={auth.state.isLoggingIn}
                    id="loginButton"
                    onClick={handleLogin}
                />
            </Row>
        </>
    );
};

export default WithThemeContext(WithAuthContext(WithTodoContext(LoginSection)));
