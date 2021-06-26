import styled from 'styled-components';

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
