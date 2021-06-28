import React from 'react';
import { useSelector } from 'react-redux';
import CreateProyectModal from '../Modals/CreateProyectModal';

const Feed = () => {
  const uiState = useSelector((state) => state.uiState);

  return (
    <section>
      {uiState.showModal && <CreateProyectModal />}
      <h1>alsdasjk</h1>
    </section>
  );
};

export default Feed;
