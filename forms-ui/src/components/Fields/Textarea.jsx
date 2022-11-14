import DragWrapper from "@utils/DragWrapper";

const Textarea = ({
  label,
  id,
  name,
  draggable = "false",
  onChange = () => {},
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
