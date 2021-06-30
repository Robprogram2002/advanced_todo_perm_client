import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { Column } from '../../StyledComponents/ContainerStyles';
import { InputContainer, Label } from '../../StyledComponents/FormStyles';

const InputSelectColor = ({ name, label }) => (
  <InputContainer>
    <Column strech>
      <Label>
        {' '}
        {label}
        {' '}
      </Label>
      <Field name={name} as="select" className="input" style={{ cursor: 'pointer' }}>
        <option value="red">
          Red
        </option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="lightblue">Light-blue</option>
        <option value="pink">Pink</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
      </Field>
    </Column>
  </InputContainer>
);

InputSelectColor.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputSelectColor;
