import styled, { css } from 'styled-components';
import { CardContainer, Row } from './ContainerStyles';

export const TaskInputContainer = styled(CardContainer)`
  border: 1px solid lightgray;
  border-radius: 6px;
  padding: 0.8rem;
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
  text-align: justify;
  padding-left: 1em;
  padding-right: 2em;

  ${(props) => props.section
    && css`
      font-size: 0.95rem;
      font-weight: bold;
      padding-left: 0.5em;
    `}
`;

export const MoveIconWrapper = styled.div`
  height: 20px;
  width: 20px;
  background-color: transparent;

  .drag_icon {
    height: 0px;
    width: 0px;
  }
`;

export const OptionsRow = styled(Row)`
    position: absolute;
    width: 10em;
    right: 4rem;
    justify-content: space-between;
    background-color: rgb(254,254,254, 0.94);

    ${(props) => props.section && css`
      right: 0.5rem;
    `}
`;

export const TaskWrapper = styled(Row)`
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 0.6em 0em;

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
