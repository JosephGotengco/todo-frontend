import React, { useState } from "react";
import Row from "../../../components/layout/Row";
import Input from "../../../components/forms/Input";
import Button from "../../../components/forms/Button";
import WithThemeContext from "../../../hocs/withThemeContext";
import { register } from "../../../actions/authActions";
import WithAuthContext from "../../../hocs/withAuthContext";
import WarningIcon from "../../../components/icons/WarningIcon";
import Fonts from "../../../components/typography";
import Wrapper from "../../../components/layout/Wrappers/Wrapper";
import { useMediaQuery } from "react-responsive";
import devices from "../../../common/sizes";
import InputLabelWrapper from "../../../components/layout/Wrappers/InputLabelWrapper";

const RegisterSection = (props) => {
    const { auth, theme } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const isLaptop = useMediaQuery({ query: devices.laptopL });

    const handleRegister = async () => {
        try {
            auth.dispatch({ type: "registering" });
            const response = await register(email, password, confirmPassword);
            if (response.status) {
                auth.dispatch({ type: "register" });
            } else {
                auth.dispatch({
                    type: "set_register_err_msg",
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
            {auth.state.registerErrMsg.length > 0 && (
                <Row justify={"center"} mTop={"10px"} mBottom={"20px"}>
                    <WarningIcon color={theme.red1} mHor={"5px"} />
                    <Wrapper maxWidth={isLaptop ? "" : "250px"} bg={theme.white1}>
                        <Fonts.Label color={theme.red1} id="registerErrMsg">
                            {auth.state.registerErrMsg}
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
                            id={"registerEmailField"}
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
                            id={"registerPasswordField"}
                            type={"password"}
                            required
                        />
                        <Fonts.Body fontSize={"12px"} color={theme.black1}>
                            Password
                        </Fonts.Body>
                    </InputLabelWrapper>
                </Wrapper>
            </Row>
            <Row justify={"center"} mTop={"15px"} mBottom={"15px"}>
                <Wrapper bg={theme.white1}>
                    <InputLabelWrapper>
                        <Input
                            value={confirmPassword}
                            handleChange={setConfirmPassword}
                            id={"registerConfirmPasswordField"}
                            type={"password"}
                            required
                        />
                        <Fonts.Body fontSize={"12px"} color={theme.black1}>
                            Confirm Password
                        </Fonts.Body>
                    </InputLabelWrapper>
                </Wrapper>
            </Row>
            <Row justify={"center"} mTop={"50px"} mBottom={"50px"}>
                <Button
                    title={"Sign up"}
                    height={"30px"}
                    width={"80px"}
                    bg={theme.black1}
                    titleColor={theme.white1}
                    loading={auth.state.isRegistering}
                    id="registerButton"
                    onClick={handleRegister}
                />
            </Row>
        </>
    );
};

export default WithThemeContext(WithAuthContext(RegisterSection));
