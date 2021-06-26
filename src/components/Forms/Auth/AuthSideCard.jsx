import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  CardContainer,
  CentralDiv,
  Column,
} from '../../StyledComponents/ContainerStyles';
import {
  FormParag,
  FormH1,
  FormButton,
} from '../../StyledComponents/FormStyles';
import globalColors from '../../../styles/color_constants';

const AuthSideCard = ({
  headling, paragraph, toPath, buttonText,
}) => {
  const history = useHistory();
  return (
    <CardContainer width={100} height={100} background={globalColors.loginColor}>
      <CentralDiv>
        <Column central>
          <FormH1>
            {' '}
            {headling}
            {' '}
          </FormH1>
          <FormParag>
            {paragraph}
          </FormParag>
          <FormButton type="button" background={globalColors.loginColor} onClick={() => history.push(toPath)}>
            {buttonText}
          </FormButton>
        </Column>
      </CentralDiv>
    </CardContainer>
  );
};

AuthSideCard.propTypes = {
  headling: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  toPath: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default AuthSideCard;
