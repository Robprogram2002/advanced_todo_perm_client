import React from 'react';
import LoginForm from '../../components/Forms/Auth/LoginForm';
import {
  CardContainer,
  CentralDiv,
  SplitContainer,
  Column,
  FormH1,
  FormParag,
  FormButton,
  Row,
  SocialIcon,
  FormSpan,
} from '../../components/UI/styled';
import globalColors from '../../styles/color_constants';

const Login = () => (
  <CentralDiv global background="whitesmoke">
    <CardContainer width={70} height={80} borderRadius={22} shadow>
      <SplitContainer columns={[40, 60]}>
        <CardContainer
          width={100}
          height={100}
          background={globalColors.loginColor}
        >
          <CentralDiv>
            <Column central>
              <FormH1>Welcome Back!</FormH1>
              <FormParag>
                To keep conected with us please login with your personal info
                {' '}
              </FormParag>
              <FormButton type="button" background={globalColors.loginColor}>
                Login
              </FormButton>
            </Column>
          </CentralDiv>
        </CardContainer>
        <CentralDiv notColumn withPadding>
          <Column central>
            <FormH1 textColor={globalColors.loginColor}>
              {' '}
              Create Account
              {' '}
            </FormH1>
            <Row width={50}>
              <SocialIcon />
              <SocialIcon />
              <SocialIcon />
            </Row>
            <FormSpan>Or use your email for registration</FormSpan>
            <LoginForm />
          </Column>
        </CentralDiv>
      </SplitContainer>
    </CardContainer>
  </CentralDiv>
);

export default Login;
