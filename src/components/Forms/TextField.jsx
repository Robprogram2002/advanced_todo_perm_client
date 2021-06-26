import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { FieldStyle, FieldLabel } from '../StyledComponents/FormStyles';

const TextField = ({
  label, name, type, Icon,
}) => (
  <FieldStyle>
    <FieldLabel>
      <Icon />
      <span>{label}</span>
    </FieldLabel>
    <Field type={type} name={name} className="text_input" />
  </FieldStyle>
);

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  Icon: PropTypes.element.isRequired,
};

export default TextField;
