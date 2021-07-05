/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { BiMove } from 'react-icons/bi';
import { AiOutlineCheck } from 'react-icons/ai';
import {
  MoveIconWrapper, Paragraph, TaskWrapper,
} from '../../StyledComponents/TaskStyles';
import { Row } from '../../StyledComponents/ContainerStyles';
import TaskIcon from './TaskIcon';
import TaskOptions from './TaskOptions';

const Task = ({ task, index, isDragging }) => (
  <Draggable draggableId={task.uuid} index={index}>
    {(provided) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <div {...provided.draggableProps} ref={provided.innerRef}>
        <TaskWrapper isDragging={isDragging}>
          <Row central start style={{ cursor: 'pointer' }}>
            <MoveIconWrapper {...provided.dragHandleProps}>
              <BiMove className="drag_icon" />
            </MoveIconWrapper>
            <TaskIcon Icon={AiOutlineCheck} />
            <Paragraph>{task.name}</Paragraph>
          </Row>
          <TaskOptions />
        </TaskWrapper>
      </div>
    )}
  </Draggable>
);

Task.propTypes = {
  task: PropTypes.element.isRequired,
  index: PropTypes.number.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

export default Task;
