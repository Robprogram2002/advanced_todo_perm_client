import React from 'react';
import styled, { css } from 'styled-components';
import { FiEdit } from 'react-icons/fi';
import { GrSchedules } from 'react-icons/gr';
import { BsThreeDots } from 'react-icons/bs';
import { GoCommentDiscussion } from 'react-icons/go';
import { Row } from '../../StyledComponents/ContainerStyles';
import NavIcon from '../../Layout/Navigation/NavIcon';

export const OptionsRow = styled(Row)`
    position: absolute;
    width: 10em;
    right: 4rem;
    justify-content: space-between;
    background-color: rgb(254,254,254, 0.94);

    ${(props) => props.section && css`
      right: 0.5rem;
    `}
`;

const TaskOptions = () => (
  <OptionsRow central>
    <NavIcon Icon={FiEdit} aside size={18} />
    <NavIcon Icon={GrSchedules} aside size={18} />
    <NavIcon Icon={GoCommentDiscussion} aside size={18} />
    <NavIcon Icon={BsThreeDots} aside size={18} />
  </OptionsRow>
);

export const SectionOptions = () => (
  <OptionsRow central section>
    <NavIcon Icon={BsThreeDots} aside size={18} />
  </OptionsRow>
);

export default TaskOptions;
