import DragWrapper from "@utils/DragWrapper";
import { getDragProps } from "@utils/getDragProps";

const Text = ({ content, draggable = "false", preview = true, ...props }) => {
  const [dragProps] = getDragProps(props);

  return (
    <DragWrapper preview={preview} draggable={draggable} {...dragProps}>
      <p>{content}</p>
    </DragWrapper>
  );
};

export default Text;
