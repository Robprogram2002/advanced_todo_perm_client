import React from 'react';
import { GiPlainCircle } from 'react-icons/gi';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, CardContainer } from '../../StyledComponents/ContainerStyles';
import TaskContent from '../../Feed/Task/TaskContent';
import SubTaskContainer from '../../Feed/SubTaskContainer';
import { uiActions } from '../../../store/redux_ui/ui_slice';

const TaskMenu = styled.menu`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  grid-template-rows: 28px;
`;

const TaskMenuItem = styled(Link)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: #757575;
  border-bottom: 1px solid transparent;
  text-decoration: none;

  & .menuitem-active {
      font-weight: bold;
      border-bottom: 2px solid black;
      color: black;
  }

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const TaskModalForm = () => {
  const { task, subTasks } = useSelector((state) => state.taskState);
  const { project } = useSelector((state) => state.proyects);
  const dispatch = useDispatch();

  return (
    <>
      <Row between central>
        <Row start central>
          <GiPlainCircle
            style={{ color: 'yellow', margin: '0rem .6rem' }}
            onClick={() => dispatch(uiActions.closeModal())}
          />
          <h4>
            {' '}
            {project.title}
            {' '}
          </h4>
        </Row>
        <AiOutlineClose
          style={{ height: '25px', width: '25px', cursor: 'pointer' }}
        />
      </Row>

      <div style={{ height: '15px' }} />

      <TaskContent name={task.name} />
      <div style={{ height: '100px' }} />

      <CardContainer padding={0.5}>
        <TaskMenu>
          <TaskMenuItem
            to={`/app/project/${project.uuid}/tasks/${task.uuid}/sub-tasks`}
            active="menuitem-active"
          >
            Sub-tasks
            <span>2</span>
          </TaskMenuItem>
          <TaskMenuItem
            to={`/app/project/${project.uuid}/tasks/${task.uuid}/comments`}
            active="menuitem-active"
          >
            Comments
            <span>12</span>
          </TaskMenuItem>
          <TaskMenuItem
            to={`/app/project/${project.uuid}/tasks/${task.uuid}/activity`}
            active="menuitem-active"
          >
            Activity
            <span>20</span>
          </TaskMenuItem>
        </TaskMenu>
        <div style={{ height: '15px' }} />
        <Switch>
          <Route
            path={`/app/project/${project.uuid}/tasks/${task.uuid}/sub-tasks`}
            render={() => (
              <SubTaskContainer
                Tasks={subTasks}
                taskId={task.uuid}
                sectionId={task.entityType === 'Section' ? task.entityId : null}
                modal
              />
            )}
          />
        </Switch>
      </CardContainer>
    </>
  );
};

export default TaskModalForm;
