/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { CardContainer } from '../StyledComponents/ContainerStyles';
import { TaskListWrapper } from '../StyledComponents/TaskStyles';
import SubTask from './Task/SubTask';
// eslint-disable-next-line import/no-cycle
import { dndTaskHandler } from './TasksContainer';

const SubTaskContainer = ({
  Tasks, taskId, sectionId, modal,
}) => {
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    dndTaskHandler({
      result,
      dispatch,
      Tasks,
      sectionId,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <CardContainer
        borderRadius={6}
        background="#fdfdfd"
        style={{ paddingLeft: !modal ? '2rem' : '0rem' }}
      >
        <Droppable droppableId="subtask_droppable" type="sub-task">
          {(provided, { isDraggingOver }) => (
            <TaskListWrapper
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDragging={isDraggingOver}
            >
              {Tasks
                && Tasks.length > 0
                && Tasks.map((task, index) => (
                  <SubTask
                    task={task}
                    index={index}
                    key={task.uuid}
                    isDragging={isDraggingOver}
                  />
                ))}
              {provided.placeholder}
            </TaskListWrapper>
          )}
        </Droppable>
      </CardContainer>
    </DragDropContext>
  );
};

SubTaskContainer.propTypes = {
  Tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  taskId: PropTypes.string.isRequired,
  sectionId: PropTypes.string.isRequired,
  modal: PropTypes.bool,
};

SubTaskContainer.defaultProps = {
  modal: false,
};

export default SubTaskContainer;
