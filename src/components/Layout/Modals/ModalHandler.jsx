import React from 'react';
import { useSelector } from 'react-redux';
import Modal from './Modal';
import CreateProyectForm from '../../Forms/Proyects/CreateProyectForm';
import TaskModalForm from '../../Forms/Tasks/TaskModalForm';

const ModalHandler = () => {
  const { showModal, modalType } = useSelector((state) => state.uiState);
  console.log('show modal', showModal);
  let component;
  let width;
  switch (modalType) {
    case 'createProject':
      component = <CreateProyectForm />;
      width = 30;
      break;

    case 'task':
      component = <TaskModalForm />;
      width = 50;
      break;

    default:
      break;
  }

  if (showModal) {
    return <Modal width={width}>{component}</Modal>;
  }
  return <div />;
};

export default ModalHandler;
