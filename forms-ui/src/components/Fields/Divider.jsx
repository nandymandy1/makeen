import DragWrapper from "@utils/DragWrapper";
import { getDragProps } from "@utils/getDragProps";
import styled from "styled-components";

const DividerElement = styled.div`
  height: 2px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Divider = ({ draggable = "false", ...props }) => {
  const [dragProps] = getDragProps(props);

  return (
    <DragWrapper draggable={draggable} {...dragProps}>
      <DividerElement />
    </DragWrapper>
  );
};

export default Divider;
