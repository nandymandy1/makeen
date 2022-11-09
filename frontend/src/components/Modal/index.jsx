import styled from "styled-components";

const Modal = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  z-index: auto;
  height: 100vh;
  position: fixed;
  padding: 10px 10px;
  background: #fff;

  display: flex;
  align-items: center;
  flex-direction: column;

  transition: visibility 0.2s, opacity 0.2s linear;

  ${({ show }) => ({
    opacity: show ? 1 : 0,
    visibility: show ? "visible" : "hidden",
  })}
`;

export const ModalHeader = styled.div`
  width: 96%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalContent = styled.div`
  width: 96%;
  flex-grow: 1;
  overflow-y: scroll;
`;

export const ModalFooter = styled.div`
  width: 96%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Modal;
