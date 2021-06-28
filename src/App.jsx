import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import Auth from './pages/Auth';
import { meRequest } from './store/user_actions';
import { uiActions } from './store/redux_ui/ui_slice';
import Home from './pages/Home';

function App() {
  const { homeLoading } = useSelector((state) => state.uiState);
  const { authenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    let expirationTime = localStorage.getItem('tokenExpiration');

    if (!token || !expirationTime) {
      dispatch(uiActions.stopHomeLoading());
      return;
    }

    expirationTime = new Date(expirationTime).getTime();

    const time = new Date().getTime();
    const isExpired = expirationTime - time;

    if (isExpired > 0) {
      // token has not expired
      // dispatch an action
      dispatch(meRequest(token));
    } else {
      // token has expired
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpiration');
      dispatch(uiActions.stopHomeLoading());
    }
  }, []);

  let routes = (
    <Switch>
      <Route path="/app" component={Home} exact />
      <Redirect to="/app" />
    </Switch>
  );

  if (!authenticated) {
    routes = (
      <Switch>
        <Route path="/auth/login" exact component={Auth} />
        <Route path="/auth/signup" exact component={Auth} />
        <Redirect to="/auth/login" />
      </Switch>
    );
  }

  return (
    <>
      {homeLoading ? (<h1> Loading ...</h1>) : routes}
    </>
  );
}

export default App;
