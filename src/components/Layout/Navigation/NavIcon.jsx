import React from 'react';
import PropTypes from 'prop-types';
import { NavIconContainer } from '../../StyledComponents/styled';

const NavIcon = ({
  Icon, aside, text, withText,
}) => (
  <NavIconContainer aside={aside} withText={withText}>
    <Icon style={{ height: '25px', width: '25px' }} />
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
};

NavIcon.defaultProps = {
  text: '',
  withText: '',
};

export default NavIcon;
