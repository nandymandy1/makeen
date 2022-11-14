import DragWrapper from "@utils/DragWrapper";

const Text = ({ draggable, content, ...restProps }) => {
  return (
    <DragWrapper draggable={draggable}>
      <p>{content}</p>
    </DragWrapper>
  );
};

export default Text;
