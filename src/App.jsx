import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from './pages/Auth';

function App() {
  const userState = useSelector((state) => state.user);

  let routes = (
    <Switch>
      <Route path="/app" render={() => <h1>Home of the app</h1>} exact />
      <Redirect to="/app" />
    </Switch>
  );

  if (!userState.authenticated) {
    routes = (
      <Switch>
        <Route path="/auth/login" exact component={Auth} />
        <Route path="/auth/signup" exact component={Auth} />
        <Redirect to="/auth/login" />
      </Switch>
    );
  }

  return <div>{routes}</div>;
}

export default App;
