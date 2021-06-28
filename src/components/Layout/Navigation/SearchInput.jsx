import React from 'react';
import PropTypes from 'prop-types';
import { FieldStyle, FieldLabel } from '../../StyledComponents/FormStyles';

const SearchInput = ({ Icon }) => (
  <FieldStyle search>
    <FieldLabel color="white">
      <Icon />
    </FieldLabel>
    <input type="text" name="search" className="text_input" placeholder="Search" />
  </FieldStyle>
);

SearchInput.propTypes = {
  Icon: PropTypes.element.isRequired,
};

export default SearchInput;
