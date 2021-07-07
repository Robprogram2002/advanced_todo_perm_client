/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { BiMove } from 'react-icons/bi';
import { AiOutlineCheck } from 'react-icons/ai';
import { RiStackshareLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  MoveIconWrapper,
  Paragraph,
  TaskWrapper,
} from '../../StyledComponents/TaskStyles';
import { Row } from '../../StyledComponents/ContainerStyles';
import TaskIcon from './TaskIcon';
import TaskOptions from './TaskOptions';
// eslint-disable-next-line import/no-cycle
import SubTaskContainer from '../SubTaskContainer';
// import { uiActions } from '../../../store/redux_ui/ui_slice';
import { getTask } from '../../../store/tasks/tasks_actions';

const Task = ({
  task, index, isDragging, sectionId,
}) => {
  const [showSubTasks, setShowSubTasks] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const taskClickHandler = (e) => {
    e.preventDefault();

    dispatch(getTask(task.uuid));

    history.push(`${history.location.pathname}/tasks/${task.uuid}/sub-tasks`);
  };

  return (
    <Draggable draggableId={task.uuid} index={index}>
      {(provided) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <TaskWrapper isDragging={isDragging}>
            <Row
              central
              start
              style={{ cursor: 'pointer' }}
            >
              <MoveIconWrapper {...provided.dragHandleProps}>
                <BiMove className="drag_icon" />
              </MoveIconWrapper>
              <TaskIcon
                Icon={AiOutlineCheck}
                sub={task.Tasks.length > 0}
                toggleSub={setShowSubTasks}
              />
              <Paragraph onClick={taskClickHandler}>
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
          {showSubTasks && (
            <SubTaskContainer
              Tasks={task.Tasks}
              taskId={task.uuid}
              sectionId={sectionId}
            />
          )}
        </div>
      )}
    </Draggable>
  );
};

Task.propTypes = {
  task: PropTypes.element.isRequired,
  index: PropTypes.number.isRequired,
  isDragging: PropTypes.bool.isRequired,
  sectionId: PropTypes.string.isRequired,
};

export default Task;
