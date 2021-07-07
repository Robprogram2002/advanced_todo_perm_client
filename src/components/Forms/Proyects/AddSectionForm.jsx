import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Row, Column } from '../../StyledComponents/ContainerStyles';
import { TaskInputContainer } from '../../StyledComponents/TaskStyles';
import { FormButton } from '../../StyledComponents/FormStyles';
import { createSection } from '../../../store/projects/project_actions';

const TriggerDiv = styled.div`
  .hoverme {
    height: 21px;
    width: 100%;
  }

  &:hover {
    .hoverme {
      display: none;
    }
  }
`;

const AddSectionRow = styled(Row)`
  color: crimson;
  font-size: 1rem;
  font-weight: bold;
  display: none;

  ${TriggerDiv}:hover & {
    display: flex;
    cursor: pointer;
  }
`;

const SectionInputContainer = styled(TaskInputContainer)`
    padding: 0.4rem;
    padding-left: .8rem;

  input {
    width: 100%;
    height: 20px;
    border: none;
    outline: none;
    font-size: .9rem;
    color: #252525cc;
    font-weight: bold;
  }

  input::placeholder{
      color: gray;
      font-weight: bold;
      font-size: .9rem;
  }
`;

const AddSectionForm = ({ projectId, position }) => {
  const [showInput, setShowInput] = useState(false);
  const [sectionName, setSectionName] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (sectionName === '') {
      return;
    }

    dispatch(createSection({ projectId, name: sectionName, position }));
    setShowInput(false);
    setSectionName('');
  };

  let content = (
    <TriggerDiv>
      <div className="hoverme" />
      <AddSectionRow central width={100} onClick={() => setShowInput(true)}>
        <div
          style={{
            height: '1px',
            backgroundColor: 'crimson',
            width: '40%',
            borderRadius: '6px',
          }}
        />
        <span>Add Section</span>
        <div
          style={{
            height: '1px',
            backgroundColor: 'crimson',
            width: '40%',
            borderRadius: '6px',
          }}
        />
      </AddSectionRow>
    </TriggerDiv>
  );

  if (showInput) {
    content = (
      <Column>
        <SectionInputContainer>
          <input
            type="text"
            placeholder="Name this section"
            value={sectionName}
            onChange={(e) => setSectionName(e.target.value)}
          />
        </SectionInputContainer>
        <Row width={30}>
          <FormButton
            type="submit"
            background="crimson"
            width={40}
            height={30}
            radius={8}
            disable={() => sectionName === ''}
            onClick={submitHandler}
          >
            Add
          </FormButton>
          <FormButton
            type="submit"
            background="gray"
            width={40}
            height={30}
            radius={8}
            onClick={() => {
              setSectionName('');
              setShowInput(false);
            }}
          >
            Cancel
          </FormButton>
        </Row>
      </Column>
    );
  }

  return content;
};

export default AddSectionForm;
