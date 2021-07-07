/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { BiMove } from 'react-icons/bi';
import { AiOutlineCheck } from 'react-icons/ai';
import { RiStackshareLine } from 'react-icons/ri';
import {
  MoveIconWrapper,
  Paragraph,
  TaskWrapper,
} from '../../StyledComponents/TaskStyles';
import { Row } from '../../StyledComponents/ContainerStyles';
import TaskIcon from './TaskIcon';
import TaskOptions from './TaskOptions';

const SubTask = ({ task, index, isDragging }) => (
  <Draggable draggableId={task.uuid} index={index}>
    {(provided) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <div {...provided.draggableProps} ref={provided.innerRef}>
        <TaskWrapper isDragging={isDragging}>
          <Row central start style={{ cursor: 'pointer' }}>
            <MoveIconWrapper {...provided.dragHandleProps}>
              <BiMove className="drag_icon" />
            </MoveIconWrapper>
            <TaskIcon Icon={AiOutlineCheck} sub={false} />
            <Paragraph>
              {task.name}
              {task.Tasks.length > 0 && (
              <div
                style={{
                  display: 'flex',
                  width: '50px',
                  justifyContent: 'center',
                  alignItemes: 'space-around',
                  color: 'gray',
                  fontSize: '0.8rem',
                }}
              >
                <RiStackshareLine />
                <span>{`0/${task.Tasks.length}`}</span>
              </div>
              )}
            </Paragraph>
          </Row>
          <TaskOptions />
        </TaskWrapper>
      </div>
    )}
  </Draggable>
);

SubTask.propTypes = {
  task: PropTypes.element.isRequired,
  index: PropTypes.number.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

export default SubTask;
