import React from 'react';
import styled from 'styled-components';
import { GoThreeBars } from 'react-icons/go';
import { BsHouseDoor } from 'react-icons/bs';
import { FiSearch, FiHelpCircle } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';

import globalColors from '../../../styles/color_constants';
import NavIcon from './NavIcon';
import { Row } from '../../StyledComponents/ContainerStyles';
import SearchInput from './SearchInput';

const NavStyle = styled.nav`
    width: 100vw;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:  ${(props) => props.background};
    padding: 1rem;

`;

const Navigation = () => (
  <NavStyle background={globalColors.loginColor}>
    <Row central width={25}>
      <NavIcon Icon={GoThreeBars} />
      <NavIcon Icon={BsHouseDoor} />
      <SearchInput Icon={FiSearch} />
    </Row>
    <Row width={20}>
      <NavIcon Icon={AiOutlinePlus} />
      <NavIcon Icon={FiHelpCircle} />
      <NavIcon Icon={IoMdNotificationsOutline} />
      <NavIcon Icon={GoThreeBars} />
    </Row>
  </NavStyle>
);

export default Navigation;
