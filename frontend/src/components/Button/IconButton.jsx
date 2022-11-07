import styled from "styled-components";

const IconButton = styled.button`
  border: none;
  display: flex;
  cursor: pointer;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  transition: 200ms ease-in;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: rgba(0, 0, 0, 0.05);
  ${({ rounded, width = 30, height = 30 }) =>
    rounded
      ? {
          width: `${width}px`,
          height: `${height}px`,
          "border-radius": "50%",
        }
      : {}}

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export default IconButton;
