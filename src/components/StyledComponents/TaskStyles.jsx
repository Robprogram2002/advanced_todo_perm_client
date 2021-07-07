import styled, { css } from 'styled-components';
import { CardContainer, Row } from './ContainerStyles';

export const TaskInputContainer = styled(CardContainer)`
  border: 1px solid lightgray;
  border-radius: 6px;
  padding: 0.8rem;
`;

export const Paragraph = styled.div`
  font-size: 0.9rem;
  text-align: justify;
  padding-left: 1em;
  padding-right: 2em;
  width: 100%;

  ${(props) => props.section
    && css`
      font-size: 0.95rem;
      font-weight: bold;
      padding-left: 0.5em;
    `}

  ${(props) => props.big && css`
    font-size: 1.02rem;
  `}
`;

export const MoveIconWrapper = styled.div`
  height: 20px;
  width: 23px;
  background-color: transparent;

  .drag_icon {
    height: 0px;
    width: 0px;
  }
`;

export const OptionsRow = styled(Row)`
    position: relative;
    width: 10em;
    right: 0rem;
    justify-content: space-between;
    background-color: rgb(254,254,254, 0.94);

    ${(props) => props.section && css`
      right: -4rem;
    `}
`;

export const TaskWrapper = styled(Row)`
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 0.6em 0em;

  ${(props) => props.section && css`
    margin-bottom: 0.6em;
    padding: 0em;
  `}

  & ${OptionsRow} {
    display: none;
  }

  ${(props) => !props.isDragging
    && css`
      &:hover {
        & ${OptionsRow} {
          display: flex;
        }
        & ${MoveIconWrapper} {
          .drag_icon {
            height: 20px;
            width: 20px;
          }
        }
      }
    `}

  ${(props) => props.modal && css`
     border-bottom: 1px solid transparent;
  `}
`;

export const TaskListWrapper = styled.div`
  border: 1px solid transparent;
  border-radius: 5px;

  ${(props) => props.isDragging
    && css`
      border: 1px solid #dddddd;
      background-color: #f8f8f8;
    `}
`;
