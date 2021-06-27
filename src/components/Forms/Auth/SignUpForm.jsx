import React, { useEffect } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormButton } from '../../StyledComponents/FormStyles';
import { Column } from '../../StyledComponents/ContainerStyles';
import TextField from '../TextField';
import globalColors from '../../../styles/color_constants';
import InputErrorText from '../InputErrorText';

import { signUp } from '../../../store/user_actions';

const signupValidationSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(3, 'name must be at least 3 characters long')
    .max(30, 'name is too large')
    .required('this field is required'),
  email: Yup.string()
    .email('add a valid email address')
    .required('this field is required'),
  password: Yup.string()
    .trim()
    .min(6, 'name must be at least 6 charcters long')
    .max(50, 'password is too large')
    .required('this field is required'),
});

const SignUpForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { success, loading } = useSelector((state) => state.uiState);

  useEffect(() => {
    if (success && history.location === '/auth/signup') history.push('auth/login');
  }, [success]);

  return (

    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={signupValidationSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        dispatch(signUp(values));
      }}
      validateOnBlur
      validateOnChange
    >
      {({ isSubmitting }) => (
        <Form style={{ width: '380px' }}>
          <Column central strech>
            <TextField label="Name" name="username" type="text" Icon={BiUser} />
            <ErrorMessage name="username" component={InputErrorText} />
            {/* {errors.name && touched.name ? <div>{errors.name}</div> : null} */}

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

export default SignUpForm;
