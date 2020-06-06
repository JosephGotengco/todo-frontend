import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Row from "../../components/layout/Row";
import { StyledWrapper } from "../../components/layout/Wrappers/Wrapper";
import Fonts from "../../components/typography";
import WithThemeContext from "../../hocs/withThemeContext";
import ArtSection from "./sections/ArtSection";
import RegisterSection from "./sections/RegisterSection";
import LoginSection from "./sections/LoginSection";
import devices from "../../common/sizes";
import ErrorBoundary from "../../components/errors/ErrorBoundary";
import { checkIfLoggedIn } from "../../actions/authActions";
import WithAuthContext from "../../hocs/withAuthContext";
import LoadingScreen from "./sections/LoadingScreen";

const AuthFormWrapper = styled(StyledWrapper)`
    width: 100%;
    @media ${devices.tablet} {
        width: 40%;
    }
`;


const AuthPage = (props) => {
    const [isLoginPage, setIsLoginPage] = useState(true);

    const { theme, auth } = props;

    useEffect(() => {
        const attemptLogin = async() => {
            const data = await checkIfLoggedIn();
            const isLoggedIn = data.status;
            if (isLoggedIn) {
                auth.dispatch({ type: "login" });
            } else {
                auth.dispatch({type: "done_checking"});
            }
        }

        attemptLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log("IS CHECKING AUTH", auth.state.isChecking)

    return (
        <>
            {auth.state.isChecking && <LoadingScreen/>}
            <Row>
                <AuthFormWrapper
                    bg={theme.white1}
                    color={theme.black2}
                    font={theme.font}
                    minHeight={"100vh"}
                >
                    <Row mTop={"30px"} justify={"center"}>
                        <Fonts.H1>A Simple ToDo List.</Fonts.H1>
                    </Row>
                    <Row
                        justify={"space-around"}
                        maxWidth={"330px"}
                        mLeft={"auto"}
                        mRight={"auto"}
                        mTop={"20px"}
                        mBottom={"40px"}
                    >
                        <Fonts.H2
                            onClick={() => setIsLoginPage(false)}
                            underlined={!isLoginPage}
                        >
                            Register
                        </Fonts.H2>
                        <Fonts.H2
                            onClick={() => setIsLoginPage(true)}
                            underlined={isLoginPage}
                        >
                            Sign in
                        </Fonts.H2>
                    </Row>
                    <ErrorBoundary>
                        {isLoginPage ? <LoginSection /> : <RegisterSection />}
                    </ErrorBoundary>
                </AuthFormWrapper>
                <ArtSection />
            </Row>
        </>
    );
};

export default WithThemeContext(WithAuthContext(AuthPage));
