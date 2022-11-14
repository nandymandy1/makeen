import DragWrapper from "@utils/DragWrapper";

const Text = ({
  draggable,
  content,
  onDragEnter = () => {},
  onDragStart = () => {},
  onDragOver = () => {},
  onDragEnd = () => {},
  onDragOver = () => {},
  ...restProps
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
      <p>{content}</p>
    </DragWrapper>
  );
};

export default Text;
