import DragWrapper from "@utils/DragWrapper";
import styled from "styled-components";

const DividerElement = styled.div`
  height: 2px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Divider = ({
  draggable = "false",
  onDragEnd = () => {},
  onDragOver = () => {},
  onDragStart = () => {},
  onDragEnter = () => {},
}) => {
  const dragProps = {
    onDragEnd,
    onDragEnter,
    onDragOver,
    onDragStart,
    onDragOver,
  };

  return (
    <DragWrapper draggable={draggable} {...dragProps}>
      <DividerElement />
    </DragWrapper>
  );
};

export default Divider;
