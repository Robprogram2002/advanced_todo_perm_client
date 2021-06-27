import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import Auth from './pages/Auth';
import { meRequest } from './store/user_actions';

function App() {
  const {
    success, error, successMessage, errorMessage, loading,
  } = useSelector((state) => state.uiState);
  const { authenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const notifySucess = () => {
    toast.success(successMessage, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyError = () => {
    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    if (success) {
      notifySucess();
    }
  }, [success]);

  useEffect(() => {
    if (error) notifyError();
  }, [error]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    let expirationTime = localStorage.getItem('tokenExpiration');

    if (!token || !expirationTime) return;

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
    }
  }, []);

  let routes = (
    <Switch>
      <Route path="/app" render={() => <h1>Home of the app</h1>} exact />
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
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {loading ? (<h1> Loading ...</h1>) : routes}
    </div>
  );
}

export default App;
