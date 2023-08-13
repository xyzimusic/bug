import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {Button} from '../Button/Button';
import {InputNumber} from '../InputNumber';


type SettingCounterPropsType = {
    minCount: number
    maxCount: number
    setMinCount: (minCount: number) => void
    setMaxCount: (maxCount: number) => void
    setCount: (count: number) => void
    nonError: boolean
    setNonError: (error: boolean) => void
}
export const SettingCounter: FC<SettingCounterPropsType> = (props) => {
    const {minCount, maxCount, setMinCount, setMaxCount, setCount, setNonError, nonError} = props
    const [minColorError, setMinColorError] = useState<boolean>(false)
    const [maxColorError, setMaxColorError] = useState<boolean>(false);
    const setSettingsHandler = () => {
        let minMaxParams = {
            min: minCount,
            max: maxCount
        }
        localStorage.setItem('minMaxParams', JSON.stringify(minMaxParams))
        setCount(minCount)
        setMinCount(minCount)
        setMaxCount(maxCount)
    }

    const callBackMin = (value: number) => {
        setMinCount(value)
        if (value < 0 || value >= maxCount) {
            setNonError(false);
            setMinColorError(true)
        } else {
            setNonError(true)
            setMinColorError(false)
        }
    }

    const callBackMax = (value: number) => {
        setMaxColorError(true)
        setMaxCount(value)
        if (value <= minCount) {
            setNonError(false)
            setMaxColorError(true)
        } else {
            setNonError(true)
            setMaxColorError(false)
        }

    }


    return (
        <>
            <Wrapper>
                <div className="wrapper-setting">
                    <div className="wrapper-setting-input">
                        <span>min:</span>
                        <InputNumber
                            countValue={minCount}
                            callback={callBackMin}
                            color={minColorError ? 'red' : ''}
                        ></InputNumber>
                    </div>

                    <div className="wrapper-setting-input">
                        <span>max:</span>
                        <InputNumber
                            color={maxColorError ? 'red' : ''}
                            countValue={maxCount}
                            callback={callBackMax}
                        ></InputNumber>
                    </div>
                </div>
                <Button disabled={!nonError} callback={setSettingsHandler}> set</Button>
            </Wrapper>
        </>
    );
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 160px;
  height: 130px;
  border: 2px rgb(112, 227, 251) solid;
  border-radius: 5px;
  background-color: rgb(43, 43, 53);

  .wrapper-setting {
    margin: 10px 0 0 0;

    &-input {
      margin: 7px 17px;
      display: flex;
      align-items: center;

      & span {
        color: rgb(112, 227, 251);
        width: 40px;
      }

      & input {
        margin-left: 10px;
        width: 72px;
      }
    }
  }

  Button {
    margin: 0 auto;
    width: 80%;
  }
`