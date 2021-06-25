import React from 'react';
// import PropTypes from 'prop-types';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { Column, FieldStyle } from '../../UI/styled';

const LoginForm = () => (
  <Formik
    initialValues={{ email: '', password: '' }}
    // validate={}
    onSubmit={() => {}}
  >
    {({ isSubmitting }) => (
      <Form style={{ width: '100%' }}>
        <Column central strech>
          <TextField />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Column>
      </Form>
    )}
  </Formik>
);

const TextField = () => (
  <FieldStyle>
    {/* <FieldLabel label="Name" /> */}
    <Field type="email" name="email" className="text_input" />
  </FieldStyle>
);

// const FieldLabel = ({ label }) => <div>{label}</div>;

export default LoginForm;
