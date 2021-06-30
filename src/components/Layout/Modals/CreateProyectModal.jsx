import React from 'react';
import styled from 'styled-components';
import { FiHelpCircle } from 'react-icons/fi';
import Modal from './Modal';
import CreateProyectForm from '../../Forms/Proyects/CreateProyectForm';

const Head = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 1.2rem ;
`;

const HeadTitle = styled.h2`
    font-size: 1rem;
    width: 90%;
`;

const CreateProyectModal = () => (
  <Modal width={30}>
    <Head>
      <HeadTitle>Add Project</HeadTitle>
      <FiHelpCircle />
    </Head>
    <hr />
    <CreateProyectForm />
    <hr />

  </Modal>
);

export default CreateProyectModal;
