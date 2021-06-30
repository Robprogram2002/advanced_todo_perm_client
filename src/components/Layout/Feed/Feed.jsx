import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Switch, Route, useRouteMatch, useHistory,
} from 'react-router-dom';
import CreateProyectModal from '../Modals/CreateProyectModal';
import Project from '../../../pages/Project';

const Feed = () => {
  const uiState = useSelector((state) => state.uiState);
  const { redirectTo } = useSelector((state) => state.metaData);
  const { path } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    if (redirectTo !== null) {
      history.push(redirectTo);
    }
  }, [redirectTo]);

  return (
    <section style={{ maxHeight: '90vh', overflowY: 'scroll', paddingBottom: '8rem' }}>
      {uiState.showModal && <CreateProyectModal />}
      <Switch>
        <Route path={`${path}/project/:projectId`} component={Project} exact />
      </Switch>
    </section>
  );
};

export default Feed;
