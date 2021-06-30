import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components/';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalStyle = styled.div`
  height: 88vh;
  background-color: white;
  border-radius: 14px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  width: ${(props) => (props.width ? props.width : 50)}%;
  margin-top: 1rem;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// eslint-disable-next-line react/prop-types
const ModalOverlay = ({ children, width }) => <ModalStyle width={width}>{children}</ModalStyle>;

const portalElement = document.getElementById('overlays');

// eslint-disable-next-line react/prop-types
const Modal = ({ children, width }) => (
  <>
    {ReactDOM.createPortal(
      <Backdrop>
        <ModalOverlay width={width}>{children}</ModalOverlay>
      </Backdrop>,
      portalElement,
    )}
  </>
);

export default Modal;
