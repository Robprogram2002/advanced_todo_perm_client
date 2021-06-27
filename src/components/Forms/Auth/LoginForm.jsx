import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { BlackLinkText } from '../../StyledComponents/styled';
import { FormButton } from '../../StyledComponents/FormStyles';
import { Column } from '../../StyledComponents/ContainerStyles';
import TextField from '../TextField';
import globalColors from '../../../styles/color_constants';
import InputErrorText from '../InputErrorText';

import { singIn } from '../../../store/user_actions';

const signupValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('add a valid email address')
    .required('this field is required'),
  password: Yup.string()
    .trim()
    .min(6, 'name must be at least 6 charcters long')
    .max(50, 'password is too large')
    .required('this field is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.uiState);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={signupValidationSchema}
      onSubmit={(values, actions) => {
        dispatch(singIn(values));
        actions.resetForm();
      }}
      validateOnBlur
      validateOnChange
    >
      {({ isSubmitting }) => (
        <Form style={{ width: '380px' }}>
          <Column central strech>
            <TextField
              label="Email"
              name="email"
              type="email"
              Icon={AiOutlineMail}
            />
            <ErrorMessage name="email" component={InputErrorText} />

            <TextField
              label="Password"
              name="password"
              type="password"
              Icon={RiLockPasswordLine}
            />
            <ErrorMessage name="password" component={InputErrorText} />

            <BlackLinkText>
              Forgot your password ?
            </BlackLinkText>
            <FormButton
              type="submit"
              disabled={isSubmitting}
              background={globalColors.loginColor}
            >
              {loading ? 'Loading ...' : 'Submit'}
            </FormButton>
          </Column>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
