import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineCalendar, AiOutlineTag } from 'react-icons/ai';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { FiFlag } from 'react-icons/fi';
import { GiAlarmClock } from 'react-icons/gi';
import { GoCommentDiscussion } from 'react-icons/go';
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import { FormSpan, FormButton, TastTextarea } from '../../StyledComponents/FormStyles';
import {
  Row,
  Column,
} from '../../StyledComponents/ContainerStyles';
import { IconCirc, IconSpan } from '../../StyledComponents/styled';
import NavIcon from '../../Layout/Navigation/NavIcon';
import {
  createProjectTask, createSectionTask, createSubTask, updateTask,
} from '../../../store/tasks/tasks_actions';
import { TaskInputContainer } from '../../StyledComponents/TaskStyles';

const Container = styled.div`
  display: flex;
  width: ${(props) => props.width || 100}%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  border: 1px solid transparent;

  ${(props) => props.margin
    && css`
      margin: 1rem 0rem;
    `}

  &:hover {
    border-bottom: 1px solid crimson;

    ${FormSpan} {
      color: crimson;
    }

    .circ_div {
      background-color: crimson;
      color: white;
    }
  }
`;

const ProyectTask = ({
// eslint-disable-next-line react/prop-types
  projectId, sectionId, taskId, name, setFn,
}) => {
  const [showInput, setShowInput] = useState(!!name);
  const [taskName, setTaskName] = useState(name || '');
  const dispatch = useDispatch();

  const textInputHandler = (e) => {
    e.preventDefault();

    setTaskName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (name) {
      dispatch(updateTask({ name: taskName, taskId }));
      setFn(false);
      return;
    }

    if (sectionId) {
      dispatch(
        createSectionTask({
          name: taskName,
          // eslint-disable-next-line react/prop-types
          entityId: sectionId,
        }),
      );
    } else if (taskId) {
      dispatch(createSubTask({ name: taskName, entityId: taskId }));
    } else {
      dispatch(
        createProjectTask({
          name: taskName,
          entityId: projectId,
        }),
      );
    }

    setTaskName('');
    setShowInput(false);
  };

  return (
    <div style={{ width: taskId ? '94%' : '100%' }}>
      {!showInput && (
        <Container onClick={() => setShowInput(true)} margin>
          <div style={{ height: '1em', width: '1.55em' }} />
          <IconCirc size={24} color="crimson" className="circ_div">
            <AiOutlinePlus />
          </IconCirc>
          <FormSpan>Add task</FormSpan>
        </Container>
      )}
      {showInput && (
        <Column style={{ marginTop: '1rem' }}>
          <TaskInputContainer>
            <TastTextarea
              rows="3"
              placeholder="e.g Desing meeting at 11 am p1 # Metting"
              cols="94"
              wrap="hard"
              value={taskName}
              onChange={textInputHandler}
            />
            <Row central between>
              <Row start>
                <IconSpan small>
                  <AiOutlineCalendar
                    style={{ height: '20px', width: '20px' }}
                  />
                  <span> Schedule </span>
                </IconSpan>
                <IconSpan small>
                  <RiCheckboxBlankCircleFill
                    style={{ height: '15px', width: '15px' }}
                  />
                  <span> Add to a project </span>
                </IconSpan>
              </Row>
              <Row width={25}>
                <NavIcon Icon={AiOutlineTag} aside size={18} />
                <NavIcon Icon={FiFlag} aside size={18} />
                <NavIcon Icon={GiAlarmClock} aside size={18} />
                <NavIcon Icon={GoCommentDiscussion} aside size={18} />
              </Row>
            </Row>
          </TaskInputContainer>
          <Row start>
            <FormButton
              type="submit"
              background="crimson"
              width={12}
              height={35}
              radius={8}
              disable={() => taskName === ''}
              onClick={submitHandler}
            >
              {name ? 'Update' : 'Add Task'}
            </FormButton>
            <FormButton
              type="submit"
              background="gray"
              width={12}
              height={35}
              radius={8}
              onClick={() => {
                if (name) {
                  setFn(false);
                } else {
                  setShowInput(false);
                }
              }}
            >
              Cancel
            </FormButton>
          </Row>
        </Column>
      )}
    </div>
  );
};

export default ProyectTask;
