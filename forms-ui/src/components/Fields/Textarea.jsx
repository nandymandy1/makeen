import DragWrapper from "@utils/DragWrapper";
import { getDragProps } from "@utils/getDragProps";

const Textarea = ({
  id,
  name,
  label,
  preview = true,
  draggable = "false",
  onChange = () => {},
  ...props
}) => {
  const [dragProps, restProps] = getDragProps(props);

  return (
    <DragWrapper preview={preview} draggable={draggable} {...dragProps}>
      <div style={{ marginTop: 10 }}>
        {label && (
          <label className="field-label" htmlFor={id}>
            {label}
          </label>
        )}
        <div style={{ marginTop: 10 }}>
          <textarea id={id} name={name} {...restProps}></textarea>
        </div>
      </div>
    </DragWrapper>
  );
};

export default Textarea;
