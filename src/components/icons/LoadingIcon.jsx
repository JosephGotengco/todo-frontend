import React from 'react';
import styled from "styled-components";
import { Spinner8 } from "@styled-icons/icomoon";

const StyledLoadingIcon = styled(Spinner8)`
    color: ${(props) => props.color};
    height: 15px;
    width: 15px;
    animation: rotate 2s linear infinite;

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`;

const LoadingIcon = (props) => <StyledLoadingIcon {...props} />

export default LoadingIcon;
