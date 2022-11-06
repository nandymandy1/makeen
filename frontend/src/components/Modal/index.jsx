import styled from "styled-components";

const Modal = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  z-index: auto;
  height: 100vh;
  position: fixed;
  padding: 10px 30px;
  background: #fff;
  transition: visibility 0.2s, opacity 0.2s linear;
  ${({ show }) => ({
    opacity: show ? 1 : 0,
    visibility: show ? "visible" : "hidden",
  })}
`;

export const ModalHeader = styled.div`
  width: 97%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Modal;
