/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { BiMove } from 'react-icons/bi';
import { TaskWrapper, Paragraph, MoveIconWrapper } from '../StyledComponents/TaskStyles';
import { Row } from '../StyledComponents/ContainerStyles';
import NavIcon from '../Layout/Navigation/NavIcon';
import { SectionOptions } from './Task/TaskOptions';

const Section = ({
  name, showFn, isOpen, dragHandle,
}) => (
  <TaskWrapper section>
    <Row central start>
      <MoveIconWrapper {...dragHandle}>
        <BiMove className="drag_icon" />
      </MoveIconWrapper>
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
  // eslint-disable-next-line react/forbid-prop-types
  dragHandle: PropTypes.object.isRequired,
};

export default Section;
