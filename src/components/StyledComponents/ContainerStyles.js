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
