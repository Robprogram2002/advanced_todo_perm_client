import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { Paragraph, TaskWrapper } from '../../StyledComponents/TaskStyles';
import { Row } from '../../StyledComponents/ContainerStyles';
import TaskIcon from './TaskIcon';
import ProyectTask from '../../Forms/Tasks/ProyectTask';

const TaskContent = ({ name, taskId }) => {
  const [updateForm, setUpdateForm] = useState(false);

  let content = (
    <TaskWrapper modal style={{ paddingTop: '18px' }}>
      <Row central start>
        <TaskIcon Icon={AiOutlineCheck} sub={false} modal />
        <Paragraph big onClick={() => setUpdateForm(true)}>
          {name}
        </Paragraph>
      </Row>
    </TaskWrapper>
  );

  if (updateForm) {
    content = (
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ProyectTask name={name} taskId={taskId} setFn={setUpdateForm} />
      </div>
    );
  }

  return <div style={{ minHeight: '30vh' }}>{content}</div>;
};

TaskContent.propTypes = {
  name: PropTypes.string.isRequired,
  taskId: PropTypes.string.isRequired,
};

export default TaskContent;
