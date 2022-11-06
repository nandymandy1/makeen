import styled from "styled-components";

const IconButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  display: flex;
  cursor: pointer;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  transition: 200ms ease-in;
  background-color: rgba(0, 0, 0, 0.05);
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export default IconButton;
