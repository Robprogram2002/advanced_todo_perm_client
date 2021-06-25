import styled, { css } from 'styled-components';

export const CentralDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.background};

  ${(props) => props.global
    && css`
      width: 100vw;
      height: 100vh;
    `}

  ${(props) => props.notColumn
    && css`
      align-items: flex-start;
    `}

  ${(props) => props.withPadding
    && css`
      padding: 1.6rem;
    `}
`;

export const CardContainer = styled.div`
  border-radius: ${(props) => props.borderRadius}px;
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}%;
  padding: ${(props) => props.padding}rem;
  overflow: hidden;
  background-color: ${(props) => props.background || 'white'};

  ${(props) => props.shadow
    && css`
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    `}
`;

export const SplitContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns[0]}% ${(props) => props.columns[1]}%;
  height: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => props.central
    && css`
      align-items: center;
    `}

  ${(props) => props.strech
    && css`
      width: 100%;
    `}
`;

export const Row = styled.div`
  display: flex;
  width: ${(props) => props.width || 100}%;
  flex-direction: row;
  justify-content: space-around;
  ${(props) => props.central
    && css`
      align-items: center;
    `}
  margin: 1rem
`;

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

  ${(props) => props.filled
    && css`
      background-color: props.background;
      color: whitesmoke;
      border: 1px solid transparent;
    `}
`;

export const SocialIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid gray;
  color: black;
`;

export const FormSpan = styled.span`
  color: gray;
  font-size: 1rem;
  margin: 0.5rem;
`;

export const FieldStyle = styled.div`
  width: 100%;
  height: 35px;
  background-color: lightgray;
  display:flex;
  border: 1px solid transparent;
  border-radius: 22px;
  margin: 0.6rem;

  input.text_input {
    outline: none;
    
  }
`;
