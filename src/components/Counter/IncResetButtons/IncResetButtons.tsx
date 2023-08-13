import React, {FC} from 'react';
import styled from 'styled-components'
import {Button} from '../../Button/Button';

type IncResetButtonsPropsType = {
    count:number
    maxCount:number
    onClickIncrementHandler:()=>void
    onClickResetHandler:()=>void
    nonError:boolean
}

export const IncResetButtons:FC<IncResetButtonsPropsType> = (props) => {
    const {count, maxCount, onClickIncrementHandler,onClickResetHandler, nonError} = props
    return (
        <ButtonsWrapper>
            <Button disabled={count === maxCount || !nonError} callback={onClickIncrementHandler}>inc</Button>
            <Button disabled={!count || !nonError} callback={onClickResetHandler}>reset</Button>
        </ButtonsWrapper>
    );
};

const ButtonsWrapper = styled.div`
  
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
`