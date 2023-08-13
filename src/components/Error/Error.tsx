import React from 'react';
import styled from 'styled-components';
import {AiOutlineExclamationCircle} from 'react-icons/ai';
import {Wrapper} from '../SettingCounter/SettingCounter';

export const Error = () => {
    return (
            <StyledError>
                <AiOutlineExclamationCircle className="error-icon" /> Incorrect Value
            </StyledError>
    );
};

const StyledError = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: red;
  text-align: center;
  

  .error-icon {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;