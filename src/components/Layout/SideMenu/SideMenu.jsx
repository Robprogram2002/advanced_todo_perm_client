import React from 'react';
import { BsFillInboxFill, BsCalendar } from 'react-icons/bs';
import { SiGooglecalendar } from 'react-icons/si';
import { IoIosArrowForward } from 'react-icons/io';

import { useDispatch } from 'react-redux';
import { Column } from '../../StyledComponents/ContainerStyles';
import SideMenuRow from './SideMenuRow';
import { uiActions } from '../../../store/redux_ui/ui_slice';

const SideMenu = () => {
  const dispatch = useDispatch();

  return (
    <Column
      right
      style={{
        padding: '2.2rem 0rem',
        backgroundColor: 'whitesmoke',
        height: '100vh',
      }}
    >
      <SideMenuRow Icon={BsFillInboxFill} text="Inbox" color="blue" hover />
      <SideMenuRow Icon={BsCalendar} text="Today" color="green" hover />
      <SideMenuRow
        Icon={SiGooglecalendar}
        text="Upcoming"
        color="purple"
        hover
      />
      <div style={{ height: '1rem' }} />
      <SideMenuRow Icon={IoIosArrowForward} text="Favorites" />
      <SideMenuRow
        Icon={IoIosArrowForward}
        text="Projects"
        addFunction={() => dispatch(uiActions.openModal({ modalType: 'createProject' }))}
      />
      <SideMenuRow Icon={IoIosArrowForward} text="Labels" />
      <SideMenuRow Icon={IoIosArrowForward} text="Filters" />
    </Column>
  );
};

export default SideMenu;
