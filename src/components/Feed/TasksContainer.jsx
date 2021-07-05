/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { CardContainer } from '../StyledComponents/ContainerStyles';
import { TaskListWrapper } from '../StyledComponents/TaskStyles';
import { changeTasksOrder } from '../../store/tasks/tasks_actions';
import Task from './Task/Task';
import { projectActions } from '../../store/projects/project_slice';
import ProyectTask from '../Forms/Tasks/ProyectTask';

const TasksContainer = ({ projectId, Tasks, sectionId }) => {
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (destination.index === source.index) {
      return;
    }
    const index = Tasks.findIndex((task) => task.uuid === draggableId);
    const dragTask = Tasks[index];

    const newTasks = Array.from(Tasks);
    newTasks.splice(source.index, 1);
    newTasks.splice(destination.index, 0, dragTask);

    if (sectionId) {
      // dispatch local reducer to update the tasks array for this Section
      dispatch(projectActions.updateSectionTasksOrder({ newTasks, sectionId }));
      // dispatch async thunk action to update the tasks order for this Section
      dispatch(
        changeTasksOrder({
          entityId: sectionId,
          taskId: dragTask.uuid,
          actualPosition: source.index,
          newPosition: destination.index,
          entityType: 'Section',
        }),
      );
    } else {
      // dispatch local reducer to update the tasks array for this project
      dispatch(projectActions.updateTasksOrder(newTasks));

      // dispatch async thunk action to update the tasks order for this project
      dispatch(
        changeTasksOrder({
          entityId: projectId,
          taskId: dragTask.uuid,
          actualPosition: source.index,
          newPosition: destination.index,
          entityType: 'Proyect',
        }),
      );
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <CardContainer borderRadius={6} background="#fdfdfd">
        <Droppable droppableId="tasks_droppable" type="task">
          {(provided, { isDraggingOver }) => (
            <TaskListWrapper
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDragging={isDraggingOver}
            >
              {Tasks
                && Tasks.length > 0
                && Tasks.map((task, index) => (
                  <Task
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
        <ProyectTask projectId={projectId} sectionId={sectionId} />
        <div style={{ height: '6px' }} />
      </CardContainer>
    </DragDropContext>
  );
};

TasksContainer.propTypes = {
  projectId: PropTypes.string,
  Tasks: PropTypes.arrayOf(PropTypes.element).isRequired,
  sectionId: PropTypes.string,
};

TasksContainer.defaultProps = {
  sectionId: null,
  projectId: null,
};

export default TasksContainer;
