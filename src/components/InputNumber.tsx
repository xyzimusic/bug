import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC, InputHTMLAttributes, useState} from 'react';
import {Input} from './Input/Input';
import styled from 'styled-components';
import {logDOM} from '@testing-library/react';


type InputNumberTypeProps = {
    countValue:number
    callback:(value:number)=>void
    color:string

}
export const InputNumber:FC<InputNumberTypeProps> = (props) => {
    const {countValue,callback, color} = props
    const [value, setValue] = useState<boolean>(false);


    const handleNameChange = (value: number) => {

        callback(value)
    };

    return (

            <Input
                value={props.countValue}
                onChange={handleNameChange}
                type="number"
                color={color}
            ></Input>

    );
};
