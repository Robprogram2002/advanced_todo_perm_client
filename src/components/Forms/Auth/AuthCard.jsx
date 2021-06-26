import React from 'react';
import { useLocation } from 'react-router-dom';
import { SplitContainer, CentralDiv, Column } from '../../StyledComponents/ContainerStyles';
import AuthForm from './AuthForm';
import AuthSideCard from './AuthSideCard';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const AuthCard = () => {
  const location = useLocation();

  if (location.pathname.split('/')[2] === 'login') {
    return (
      <SplitContainer columns={[60, 40]}>
        <CentralDiv notColumn withPadding>
          <Column central>
            <AuthForm title="Sign in to ToDoIest">
              <LoginForm />
            </AuthForm>
          </Column>
        </CentralDiv>
        <AuthSideCard
          headling="Hello Friend!"
          paragraph="Enter your personal details and start journey with us"
          buttonText="SIGN UP"
          toPath="/auth/signup"
        />
      </SplitContainer>
    );
  }
  return (
    <SplitContainer columns={[40, 60]}>
      <AuthSideCard
        headling="Welcome Back!"
        paragraph="To keep conected with us please login with your personal info"
        buttonText="SIGN IN"
        toPath="/auth/login"
      />
      <CentralDiv notColumn withPadding>
        <Column central>
          <AuthForm title="Create Account">
            <SignUpForm />
          </AuthForm>
        </Column>
      </CentralDiv>
    </SplitContainer>
  );
};

export default AuthCard;
