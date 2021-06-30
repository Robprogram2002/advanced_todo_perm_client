import React, { useEffect } from 'react';
import styled from 'styled-components';
import { GoCommentDiscussion } from 'react-icons/go';
import { RiUserSharedLine, RiArrowUpDownFill } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Row } from '../components/StyledComponents/ContainerStyles';
import NavIcon from '../components/Layout/Navigation/NavIcon';
import { getProject } from '../store/projects/project_actions';
import AddSectionRow from '../components/Forms/Proyects/AddSectionForm';
import TasksContainer from '../components/Feed/TasksContainer';

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
  const { project } = useSelector((state) => state.proyects);
  const location = history.location.pathname.split('/');
  const projectId = location[location.length - 1];

  useEffect(() => {
    dispatch(getProject(projectId));
  }, [projectId]);

  return (
    <div style={{ padding: '1.4rem 8rem 2rem 3rem' }}>
      {project && (
        <>
          <Row central>
            <div style={{ width: '65%' }}>
              <ProjectTitle>
                {' '}
                {project.title}
                {' '}
              </ProjectTitle>
            </div>
            <Row central style={{ width: '35%' }}>
              <NavIcon Icon={GoCommentDiscussion} text={1} aside withText />
              <NavIcon Icon={RiUserSharedLine} text="Share" aside withText />
              <NavIcon Icon={RiArrowUpDownFill} text="Sort" aside withText />
              <NavIcon Icon={BsThreeDots} aside withText />
            </Row>
          </Row>
          <div style={{ height: '14px' }} />
          <TasksContainer projectId={projectId} Tasks={project.Tasks} />
          <AddSectionRow projectId={projectId} />
          {project.Sections.length > 0 && project.Sections.map((section) => (
            <>

              <TasksContainer
                projectId={projectId}
                Tasks={section.Tasks}
                section={section}
                key={section.uuid}
              />
              <AddSectionRow projectId={projectId} />

            </>
          ))}
        </>
      )}
    </div>
  );
};

export default Project;
