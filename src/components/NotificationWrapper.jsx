import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
const NotificationWrapper = ({ children }) => {
  const {
    success, error, successMessage, errorMessage,
  } = useSelector((state) => state.uiState);
  const notifySucess = () => {
    toast.success(successMessage, {
      position: 'top-center',
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
      position: 'top-center',
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

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </>
  );
};

export default NotificationWrapper;
