import React, { useEffect } from 'react';
import styled from 'styled-components';
import { GoCommentDiscussion } from 'react-icons/go';
import { RiUserSharedLine, RiArrowUpDownFill } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Row } from '../components/StyledComponents/ContainerStyles';
import NavIcon from '../components/Layout/Navigation/NavIcon';
import ProyectTask from '../components/Forms/Tasks/ProyectTask';
import { getProject } from '../store/projects/project_actions';
import AddSectionRow from '../components/Forms/Proyects/AddSectionForm';

const ProjectTitle = styled.h2`
    font-size: 1.4rem;
    color: black;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 0;
`;

const Project = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = history.location.pathname.split('/');
  const projectId = location[location.length - 1];

  useEffect(() => {
    dispatch(getProject(projectId));
  }, [projectId]);

  return (
    <div style={{ padding: '1.4rem 6rem 2rem 4rem' }}>
      <Row central>
        <div style={{ width: '65%' }}>
          <ProjectTitle>Project Name</ProjectTitle>
        </div>
        <Row central style={{ width: '35%' }}>
          <NavIcon Icon={GoCommentDiscussion} text={1} aside withText />
          <NavIcon Icon={RiUserSharedLine} text="Share" aside withText />
          <NavIcon Icon={RiArrowUpDownFill} text="Sort" aside withText />
          <NavIcon Icon={BsThreeDots} aside withText />
        </Row>
      </Row>
      <ProyectTask projectId={projectId} />
      <div style={{ height: '14px' }} />
      <AddSectionRow projectId={projectId} />
    </div>
  );
};

export default Project;
