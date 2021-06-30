/* eslint-disable react/require-default-props */
import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import { Column } from '../StyledComponents/ContainerStyles';
import { InputContainer, Label } from '../StyledComponents/FormStyles';

const InputTextForm = ({
  type, name, label, as,
}) => (
  <InputContainer shadow>
    <Column strech>
      <Label>
        {' '}
        {label}
        {' '}
      </Label>
      {as ? (
        <Field as={as} rows={4} name={name} className="input" />
      ) : (
        <Field type={type} name={name} className="input" />
      )}
    </Column>
  </InputContainer>
);

InputTextForm.propTypes = {
  type: PropTypes.string,
  as: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputTextForm;
