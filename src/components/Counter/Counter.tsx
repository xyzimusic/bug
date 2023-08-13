import styled from 'styled-components'
import {DetailedHTMLProps, FC, HTMLAttributes} from 'react';
import {IncResetButtons} from './IncResetButtons/IncResetButtons';
import {Error} from '../Error/Error';

type CounterPropsType = {
    count: number
    maxCount: number
    minCount: number
    setCount: (count: number) => void
    nonError:boolean
    setError:(error:boolean)=>void
}

export const Counter: FC<CounterPropsType> = (props) => {
    let  {count,
        setCount, maxCount,
        minCount,
        nonError,
        setError} = props

    const onClickIncrementHandler = () => {
        count < maxCount && setCount(++count)
    }

    const onClickResetHandler = () => {
        setCount(minCount)
    }

    return (
        <>
                 <Wrapper>
                     { nonError ? <StyledCounter maxCount={maxCount} count={count}>
                            <div className="wrapper">
                                <div className="wrapper-counter">{count}</div>
                            </div>
                        </StyledCounter>
                     :
                         <Error></Error>
                     }
                        <IncResetButtons
                            nonError={nonError}
                            count={count}
                            maxCount={maxCount}
                            onClickResetHandler={onClickResetHandler}
                            onClickIncrementHandler={onClickIncrementHandler}
                        />
                    </Wrapper>


        </>
    );
};

type DefaultProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

type StyledCounterPropsType = DefaultProps & {
    maxCount: number
    count: number
}

const StyledCounter = styled.div<StyledCounterPropsType>`
  width: 100%;
  height: 50%;

  .wrapper {
    width: 90%;
    height: 40px;
    background-color: rgb(43, 43, 53);
    border-radius: 5px;
    border: 2px rgb(112, 227, 251) solid;
    margin: 20px auto;

    .wrapper-counter {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: xx-large;
      color: ${props => props.maxCount === props.count ? '#ff0030' : '#70e3fb'};
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 160px;
  height: 130px;
  border: 2px rgb(112, 227, 251) solid;
  border-radius: 5px;
  background-color: rgb(43, 43, 53);

`