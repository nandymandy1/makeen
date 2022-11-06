import styled from "styled-components";

const Modal = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  z-index: auto;
  height: 100vh;
  padding: 30px;
  position: fixed;
  background: #fff;
  display: ${({ show }) => (show ? "block" : "none")};
`;

export default Modal;
