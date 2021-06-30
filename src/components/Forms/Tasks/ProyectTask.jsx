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
import { IconCirc, IconSpan, TaskInputContainer } from '../../StyledComponents/styled';
import NavIcon from '../../Layout/Navigation/NavIcon';
import { createProjectTask, createSectionTask } from '../../../store/tasks/tasks_actions';

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

// eslint-disable-next-line react/prop-types
const ProyectTask = ({ projectId, section }) => {
  const [showInput, setShowInput] = useState(false);
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const textInputHandler = (e) => {
    e.preventDefault();

    setTaskName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (section === null || section === undefined) {
      dispatch(
        createProjectTask({
          name: taskName,
          entityId: projectId,
        }),
      );
    } else {
      dispatch(
        createSectionTask({
          name: taskName,
          // eslint-disable-next-line react/prop-types
          entityId: section.uuid,
        }),
      );
    }

    setTaskName('');
    setShowInput(false);
  };

  return (
    <>
      {!showInput && (
        <Container onClick={() => setShowInput(true)} margin>
          <IconCirc size={24} color="crimson" className="circ_div">
            <AiOutlinePlus />
          </IconCirc>
          <FormSpan>Add task</FormSpan>
        </Container>
      )}
      {showInput && (
        <Column style={{ margin: '1rem 0rem' }}>
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
              <Row width={35}>
                <IconSpan>
                  <AiOutlineCalendar
                    style={{ height: '20px', width: '20px' }}
                  />
                  <span> Schedule </span>
                </IconSpan>
                <IconSpan>
                  <RiCheckboxBlankCircleFill
                    style={{ height: '15px', width: '15px' }}
                  />
                  <span> Add to a project </span>
                </IconSpan>
              </Row>
              <Row width={25}>
                <NavIcon Icon={AiOutlineTag} aside />
                <NavIcon Icon={FiFlag} aside />
                <NavIcon Icon={GiAlarmClock} aside />
                <NavIcon Icon={GoCommentDiscussion} aside />
              </Row>
            </Row>
          </TaskInputContainer>
          <Row width={30}>
            <FormButton
              type="submit"
              background="crimson"
              width={40}
              height={35}
              radius={8}
              disable={() => taskName === ''}
              onClick={submitHandler}
            >
              Add Task
            </FormButton>
            <FormButton
              type="submit"
              background="gray"
              width={40}
              height={35}
              radius={8}
              onClick={() => setShowInput(false)}
            >
              Cancel
            </FormButton>
          </Row>
        </Column>
      )}
    </>
  );
};

export default ProyectTask;
