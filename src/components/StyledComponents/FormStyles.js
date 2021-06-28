import styled, { css } from 'styled-components';

export const FormH1 = styled.h1`
  color: ${(props) => props.textColor || 'whitesmoke'};
  font-size: 2.3rem;
  font-weight: bold;
  margin: 0.5rem;
  letter-spacing: 1.5px;
`;

export const FormParag = styled.p`
  color: ${(props) => props.textColor || 'whitesmoke'};
  font-size: 18px;
  width: 260px;
  line-height: 1.8rem;
  text-align: center;
  margin: 0.5rem;
`;

export const FormButton = styled.button`
  width: 70%;
  height: 45px;
  border-radius: 18px;
  background-color: ${(props) => props.background};
  border: 1px solid whitesmoke;
  color: whitesmoke;
  font-size: 1rem;
  text-align: center;
  margin: 1rem;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }

  &::disabled {
    background-color: gray;
  }

  ${(props) => props.filled
    && css`
      background-color: props.background;
      color: whitesmoke;
      border: 1px solid transparent;
    `}
`;

export const FormSpan = styled.span`
  color: gray;
  font-size: 1rem;
  margin: 0.5rem;
`;

export const FieldLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: auto;
  padding: 0;
  color: ${(props) => (props.color ? props.color : 'gray')} ;
  font-weight: bold;
  margin-left: 8px;
  span {
    margin: 0px 5px;
    font-size: 0.9rem;
  }

`;

export const FieldStyle = styled.div`
  width: 100%;
  height: 40px;
  background-color: #f0eded;
  display: flex;
  border: 1px solid transparent;
  border-radius: 12px;
  margin: 0.6rem;
  overflow: hidden;

  input.text_input {
    outline: none;
    margin: 2px;
    background-color: transparent;
    border: none;
    width: 100%;
    font-size: 1rem;
    color: darkslategray;
    padding: 0 5px;
    font-weight: bold;
  }

  ${(props) => props.search && css`
    height: 5vh;
    width : 60%;
    background-color: #ff6b6b;
    margin: 0.9rem;
    border-radius: 8px;

    input.text_input {
    font-size: .9rem;
    color: white;
    font-weight: normal;
    }
    
    input::placeholder {
      color:white;
    }

  `}
`;

// or color: brown
export const ErrorText = styled.span`
  color: crimson;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 1px;
`;
