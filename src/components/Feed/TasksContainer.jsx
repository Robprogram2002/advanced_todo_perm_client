import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { CardContainer, Row } from '../StyledComponents/ContainerStyles';
import TaskIcon from './Task/TaskIcon';
import TaskOptions, { OptionsRow, SectionOptions } from './Task/TaskOptions';
import ProyectTask from '../Forms/Tasks/ProyectTask';
import NavIcon from '../Layout/Navigation/NavIcon';

const Paragraph = styled.p`
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

const TaskWrapper = styled(Row)`
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 0.6em 0em;

  & ${OptionsRow} {
    display: none;
  }

  &:hover {
    & ${OptionsRow} {
      display: flex;
    }
  }
`;

const Task = ({ name, completed }) => (
  <TaskWrapper>
    <Row central start style={{ cursor: 'pointer' }}>
      <TaskIcon Icon={AiOutlineCheck} />
      <Paragraph>
        {name}
        {completed}
      </Paragraph>
    </Row>
    <TaskOptions />
  </TaskWrapper>
);

const Section = ({ name, showFn, isOpen }) => (
  <TaskWrapper section>
    <Row central start>
      <NavIcon
        Icon={isOpen ? IoIosArrowDown : IoIosArrowForward}
        aside
        size={12}
        clickHandler={() => showFn((prevState) => !prevState)}
      />
      <Paragraph section>{name}</Paragraph>
    </Row>
    <SectionOptions />
  </TaskWrapper>
);

Section.propTypes = {
  name: PropTypes.string.isRequired,
  showFn: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

Task.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

const TasksContainer = ({ projectId, Tasks, section }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <CardContainer borderRadius={6} background="#fdfdfd">
      {section && <Section name={section.name} showFn={setIsOpen} isOpen={isOpen} />}

      <div style={{ paddingLeft: '1em', display: isOpen ? 'block' : 'none' }}>
        {Tasks
          && Tasks.length > 0
          && Tasks.map((task) => (
            <Task name={task.name} completed={false} key={task.uuid} />
          ))}
        <ProyectTask projectId={projectId} section={section} />
      </div>

      <div style={{ height: '6px' }} />
    </CardContainer>
  );
};

TasksContainer.propTypes = {
  projectId: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  section: PropTypes.element,
  Tasks: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default TasksContainer;
