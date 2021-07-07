import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IoIosArrowForward } from 'react-icons/io';

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
  margin-left: 5px;

  &:hover {
    background-color: #cacaca;
    padding: 2px;
    & svg {
      display: block;
    }
  }

  & svg {
    display: none;
  }
`;

const TaskIcon = ({
  Icon, size, sub, toggleSub, modal,
}) => (
  <>
    { sub ? (
      <IoIosArrowForward onClick={() => toggleSub((prevState) => !prevState)} />
    ) : !modal && (
      <div style={{ width: '16px' }} />
    ) }
    <IconWrapper>
      <Icon height={size} width={size} />
    </IconWrapper>
  </>
);

TaskIcon.propTypes = {
  Icon: PropTypes.node.isRequired,
  size: PropTypes.number,
  sub: PropTypes.bool.isRequired,
  toggleSub: PropTypes.func,
  modal: PropTypes.bool,
};

TaskIcon.defaultProps = {
  size: 20,
  toggleSub: () => {},
  modal: false,
};

export default TaskIcon;
