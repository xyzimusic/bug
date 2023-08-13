import React, {ChangeEvent, FC, useState} from 'react';
import styled from 'styled-components';

type InputPropsType = {
    value: number;
    onChange: (value: number) => void;
    type: string
    color: string
}


export const Input: FC<InputPropsType> = (props) => {
    const {value, onChange, type,color} = props
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.currentTarget.value));
    };


    return (
        <StyledInput type={type} value={value}  color={color} onChange={handleChange}/>
    );
};

const StyledInput = styled.input`
  background-color: ${props => props.color};
  margin-left: 10px;
  width: 72px;
`


