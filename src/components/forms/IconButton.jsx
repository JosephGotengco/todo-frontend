import {StyledButton} from "./Button";
import styled from "styled-components";
import React from 'react';
import LoadingIcon from "../icons/LoadingIcon";
import withThemeContext from "../../hocs/withThemeContext";

const StyledIconButton = styled(StyledButton)`
    padding: 5px;
    border-radius: 10px;
    transform: none;
`;

const IconButton = (props) => {
    const { theme, loading, icon, ...otherProps } = props;

	return (
        <StyledIconButton {...otherProps}>
            {loading ? (
                <LoadingIcon color={theme.white1} />
            ) : (
					<>
					{icon}
                </>
            )}
        </StyledIconButton>
    );
}

export default withThemeContext(IconButton);
