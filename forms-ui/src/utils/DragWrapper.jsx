import styled from "styled-components";

const DragWrapper = styled.div`
  cursor: move;
  margin: 15px 5px;
  padding: 15px 5px;
  &[draggable="false"] {
    cursor: unset;
  }
`;

export default DragWrapper;
