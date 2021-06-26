import React from 'react';
import PropTypes from 'prop-types';
import { ErrorText } from '../StyledComponents/FormStyles';

const InputErrorText = ({ children }) => (
  <div>
    <ErrorText>
      {children}
    </ErrorText>
  </div>
);

InputErrorText.propTypes = {
  children: PropTypes.string.isRequired,
};

export default InputErrorText;
