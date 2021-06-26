import React from 'react';
import {
  CardContainer,
  CentralDiv,
} from '../components/StyledComponents/ContainerStyles';
import AuthCard from '../components/Forms/Auth/AuthCard';

const Auth = () => (
  <CentralDiv global background="whitesmoke">
    <CardContainer width={70} height={80} borderRadius={22} shadow>
      <AuthCard />
    </CardContainer>
  </CentralDiv>
);
export default Auth;
