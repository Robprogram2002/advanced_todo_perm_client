import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const NavIconContainer = styled.div`
  width: 2.2em;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;
  padding: 6px 0px;
  color: white;
  font-weight: normal;
  &:hover {
    background-color : #ff6b6b
  }

  ${(props) => props.aside && css`
    color: lightgray;
    &:hover {
      background-color: #ece7e6;
      color: black;
    }
  `}
  
`;

const NavIcon = ({ Icon, aside }) => (
  <NavIconContainer aside={aside}>
    <Icon style={{ height: '100%', width: '100%' }} />
  </NavIconContainer>
);

NavIcon.propTypes = {
  Icon: PropTypes.node.isRequired,
  aside: PropTypes.bool.isRequired,
};

export default NavIcon;
