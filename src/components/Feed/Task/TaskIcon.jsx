import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #b3b2b2;
  background-color: transparent;
  cursor: pointer;
  padding: 10px;
  font-weight: normal;

  &:hover {
      background-color: #cacaca;
      padding: 2px;
      & svg {
        display:block;
      }
  }

  & svg {
      display : none;
  }

`;

const TaskIcon = ({ Icon, size }) => (
  <IconWrapper>
    <Icon height={size} width={size} />
  </IconWrapper>
);

TaskIcon.propTypes = {
  Icon: PropTypes.node.isRequired,
  size: PropTypes.number,
};

TaskIcon.defaultProps = {
  size: 20,
};

export default TaskIcon;
