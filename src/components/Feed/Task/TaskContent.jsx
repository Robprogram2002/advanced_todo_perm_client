import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import PropTypes from 'prop-types';
import {
  Paragraph,
  TaskWrapper,
} from '../../StyledComponents/TaskStyles';
import { Row } from '../../StyledComponents/ContainerStyles';
import TaskIcon from './TaskIcon';

const TaskContent = ({ name }) => (
  <TaskWrapper modal>
    <Row
      central
      start
    >
      <TaskIcon
        Icon={AiOutlineCheck}
        sub={false}
        modal
      />
      <Paragraph big>
        {name}
      </Paragraph>
    </Row>
  </TaskWrapper>
);

TaskContent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TaskContent;
