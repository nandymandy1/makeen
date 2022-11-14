import DragWrapper from "@utils/DragWrapper";

const Text = ({
  content,
  draggable = "false",
  onDragEnd = () => {},
  onDragOver = () => {},
  onDragEnter = () => {},
  onDragStart = () => {},
}) => {
  const dragProps = {
    onDragEnd,
    onDragEnter,
    onDragOver,
    onDragStart,
  };

  return (
    <DragWrapper draggable={draggable} {...dragProps}>
      <p>{content}</p>
    </DragWrapper>
  );
};

export default Text;
