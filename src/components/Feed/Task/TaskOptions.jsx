import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { GrSchedules } from 'react-icons/gr';
import { BsThreeDots } from 'react-icons/bs';
import { GoCommentDiscussion } from 'react-icons/go';
import NavIcon from '../../Layout/Navigation/NavIcon';
import { OptionsRow } from '../../StyledComponents/TaskStyles';

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
