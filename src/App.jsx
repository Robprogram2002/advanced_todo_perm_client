import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Auth/Login';

function App() {
  const userState = useSelector((state) => state.user);

  let routes = (
    <Switch>
      <Route path="/app" render={() => <h1>Home of the app</h1>} exact />
      <Redirect to="/app" />
    </Switch>
  );
  console.log(userState);

  if (!userState.authenticated) {
    routes = (
      <Switch>
        <Route path="/auth/login" exact component={Login} />
        <Route
          path="/auth/signup"
          exact
          render={() => <h1>Hello from sing Up</h1>}
        />
        <Redirect to="/auth/login" />
      </Switch>
    );
  }

  return (
    <div>
      {routes}
    </div>
  );
}

export default App;
