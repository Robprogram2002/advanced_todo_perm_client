import styled, { css } from 'styled-components';
import { CardContainer } from './ContainerStyles';

export const SocialIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid gray;
  color: black;
`;

export const BlackLinkText = styled.p`
  color: black;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 600;
  padding: 1rem;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

export const NavIconContainer = styled.div`
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;
  padding: 6px;
  color: white;
  font-weight: normal;
  &:hover {
    background-color : #ff6b6b
  }



  ${(props) => props.aside && css`
    color: #b3b2b2;
    &:hover {
      background-color: #ebebeb;
      color: black;
    }
  `}

  ${(props) => props.withText && css`
    justify-content:space-around;
    padding: 10px;
  `}
  
`;

export const IconCirc = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.color ? props.color : 'black')};
  font-weight: bold;
`;

export const IconSpan = styled(NavIconContainer)`
  border-radius: 6px;
  border: 1px solid lightgray;
  color: #505050cc;
  justify-content: space-between;
  padding: 10px 12px;

  &:hover {
    background-color: #ebebeb;
    color: black;
  }
`;

export const TaskInputContainer = styled(CardContainer)`
  border: 1px solid lightgray;
  border-radius: 6px;
  padding: 0.8rem;
`;
