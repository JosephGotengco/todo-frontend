import React from "react";
import styled from "styled-components";
import { WaveSpinner } from "react-spinners-kit";
import Fonts from "../../../components/typography";

const StyledLoadingScreen = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: #fff;
	z-index: 100;
	font-family: Poppins;
`;

const LoadingIconWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const LoadingScreen = () => {
	return (
        <StyledLoadingScreen>
			<LoadingIconWrapper>
				<Fonts.H1 mBottom={"20px"}>A Simple Todo List.</Fonts.H1>
                <WaveSpinner color={"black"} size={30} />
            </LoadingIconWrapper>
        </StyledLoadingScreen>
    );
}

export default LoadingScreen;