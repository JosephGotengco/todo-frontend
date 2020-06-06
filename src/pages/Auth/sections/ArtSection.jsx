import React from "react";
import styled from "styled-components";
import withThemeContext from "../../../hocs/withThemeContext";
import  {
    StyledWrapper,
} from "../../../components/layout/Wrappers/Wrapper";
import AbsoluteWrapper from "../../../components/layout/Wrappers/AbsoluteWrapper";
import registerImage from "../../../images/register.png";
import { ReactComponent as Line1 } from "../../../images/line1.svg";
import { ReactComponent as Line2 } from "../../../images/line2.svg";
import { ReactComponent as Line3 } from "../../../images/line3.svg";
import { ReactComponent as Line4 } from "../../../images/line4.svg";
import devices from "../../../common/sizes";

const ArtWrapper = styled(StyledWrapper)`
    display: none;
    overflow: hidden;

    @media ${devices.tablet} {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const ImageWrapper = styled(StyledWrapper)`
    z-index: 2;
    max-width: 500px;
`;

const Image = styled.img`
    object-fit: cover;
    height: 70vh;
    max-width: 500px;
`;

const ArtSection = (props) => {
    const { theme } = props;

    return (
        <ArtWrapper bg={theme.grey3} minHeight={"100vh"} width={"60%"}>
            <StyledWrapper width={"50%"} top={"15%"} left={"25%"}>
                <ImageWrapper bg={theme.blue1}>
                    <Image src={registerImage} alt={"Welcome"} />
                </ImageWrapper>
            </StyledWrapper>
            <AbsoluteWrapper width={"100%"} height={"100%"} left={"10px"}>
                <Line1 />
            </AbsoluteWrapper>
            <AbsoluteWrapper
                width={"100%"}
                height={"100%"}
                left={"10px"}
                top={"50%"}
            >
                <Line2 />
            </AbsoluteWrapper>
            <AbsoluteWrapper
                width={"100%"}
                height={"100%"}
                left={"10px"}
                top={"0%"}
            >
                <Line3 />
            </AbsoluteWrapper>
            <AbsoluteWrapper
                width={"100%"}
                height={"100%"}
                left={"10px"}
                top={"50%"}
            >
                <Line4 />
            </AbsoluteWrapper>
        </ArtWrapper>
    );
};

export default withThemeContext(ArtSection);
