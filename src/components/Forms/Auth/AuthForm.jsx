import React from 'react';
import PropTypes from 'prop-types';
import { SocialIcon } from '../../StyledComponents/styled';
import { FormH1, FormSpan } from '../../StyledComponents/FormStyles';
import { Row } from '../../StyledComponents/ContainerStyles';
import globalColors from '../../../styles/color_constants';

// eslint-disable-next-line react/prop-types
const AuthForm = ({ children, title }) => (
  <>
    <FormH1 textColor={globalColors.loginColor}>
      {' '}
      {title}
      {' '}
    </FormH1>
    <Row width={50}>
      <SocialIcon />
      <SocialIcon />
      <SocialIcon />
    </Row>
    <FormSpan>Or use your email for registration</FormSpan>
    {children}
  </>
);

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AuthForm;
