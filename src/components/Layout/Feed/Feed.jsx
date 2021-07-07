import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Switch, Route, useRouteMatch, useHistory,
} from 'react-router-dom';
import Project from '../../../pages/Project';
import ModalHandler from '../Modals/ModalHandler';

const Feed = () => {
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
      <ModalHandler />
      <Switch>
        <Route path={`${path}/project/:projectId`} component={Project} exact />
      </Switch>
    </section>
  );
};

export default Feed;
