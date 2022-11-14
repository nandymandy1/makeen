import DragWrapper from "@utils/DragWrapper";
import { getDragProps } from "@utils/getDragProps";

const Text = ({ content, draggable = "false", ...props }) => {
  const [dragProps] = getDragProps(props);

  return (
    <DragWrapper draggable={draggable} {...dragProps}>
      <p>{content}</p>
    </DragWrapper>
  );
};

export default Text;
