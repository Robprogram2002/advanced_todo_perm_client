import React from 'react';
import PropTypes from 'prop-types';
import { NavIconContainer } from '../../StyledComponents/styled';

const NavIcon = ({
  Icon, aside, text, withText, size, clickHandler,
}) => (
  <NavIconContainer aside={aside} withText={withText} onClick={clickHandler}>
    <Icon style={{ height: `${size}px`, width: `${size}px` }} />
    {text && (
    <span>
      {' '}
      {text}
      {' '}
    </span>
    )}
  </NavIconContainer>
);

NavIcon.propTypes = {
  Icon: PropTypes.node.isRequired,
  aside: PropTypes.bool.isRequired,
  text: PropTypes.string,
  withText: PropTypes.string,
  size: PropTypes.number,
  clickHandler: PropTypes.func,
};

NavIcon.defaultProps = {
  text: '',
  withText: '',
  size: 25,
  clickHandler: () => {},
};

export default NavIcon;
