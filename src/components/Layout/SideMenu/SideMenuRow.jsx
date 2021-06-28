import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import {
  SplitContainer,
  CentralDiv,
} from '../../StyledComponents/ContainerStyles';
import NavIcon from '../Navigation/NavIcon';

const RowSpan = styled.span`
  color: black;
  font-size: 1rem;
  padding: 0.5rem;
  font-weight: bold;

  ${(props) => props.hover && css`
    font-weight: normal;
  `}
`;

const RowStyle = styled.div`
  width: 90%;
  border-radius: 8px;
  cursor: pointer;
  color: ${(props) => (props.color ? props.color : 'gray')};
  margin: 6px 0px;
  ${(props) => props.hover
    && css`
      margin: 0px;
      &:hover {
        background-color: #ece7e6;
      }
    `}
`;

const IntSpan = styled.span`
  color: gray;
  font-size: 1rem;
`;

const SideMenuRow = ({
  Icon, text, color, hover, addFunction,
}) => (
  <RowStyle color={color} hover={hover}>
    <SplitContainer strech columns={[15, 85]}>
      <CentralDiv>
        <Icon />
      </CentralDiv>
      <SplitContainer strech columns={[80, 20]}>
        <RowSpan hover={hover}>{text}</RowSpan>
        <CentralDiv onClick={addFunction}>
          {hover ? (<IntSpan> 20 </IntSpan>) : (<NavIcon Icon={AiOutlinePlus} aside />)}
        </CentralDiv>
      </SplitContainer>
    </SplitContainer>
  </RowStyle>
);

SideMenuRow.propTypes = {
  Icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  hover: PropTypes.bool.isRequired,
  addFunction: PropTypes.func,
};

SideMenuRow.defaultProps = {
  addFunction: () => {},
};

export default SideMenuRow;
