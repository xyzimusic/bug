import React, {FC} from 'react';
import styled from 'styled-components';

type PropsType = {
    children: React.ReactNode
    callback: () => void
    disabled: boolean
}
export const Button: FC<PropsType> = ({children, callback, disabled}) => {

    return (
        <StyledButton onClick={callback} disabled={disabled}>{children}</StyledButton>
    );
};

const StyledButton = styled.button`
    width: 60px;
    margin: 5px;
    padding: 10px;
`