import DragWrapper from "@utils/DragWrapper";
import { useState } from "react";
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";

const Radio = ({
  id,
  name,
  label,
  options = [],
  optProps = {
    size: 22,
  },
  error = null,
  color = "#047aff",
  draggable = "false",
  onChange = () => {},
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

  const [option, setOption] = useState(
    options.map((opt) => ({
      ...opt,
      selected: opt?.selected ? opt.selected : false,
    }))
  );

  const changeHandler = (opt) => {
    if (opt.disabled) {
      return;
    }

    let updatedOpts = option.map((oopt) => {
      if (oopt.value === opt.value) {
        return {
          ...opt,
          selected: true,
        };
      }
      return {
        ...oopt,
        selected: false,
      };
    });

    setOption(updatedOpts);
    onChange({ [name]: { ...opt, selected: true } });
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
          {option.map((opt) => (
            <div
              key={opt.value}
              style={{ marginTop: 5 }}
              className="d-flex align-items-center"
              onClick={() => changeHandler(opt)}
            >
              {opt.disabled ? (
                <MdRadioButtonUnchecked color="#909497" {...optProps} />
              ) : (
                <>
                  {!opt.selected && (
                    <MdRadioButtonUnchecked color={color} {...optProps} />
                  )}
                  {opt.selected && (
                    <MdRadioButtonChecked color={color} {...optProps} />
                  )}
                </>
              )}
              <p style={{ marginLeft: 10 }}>{opt.label}</p>
            </div>
          ))}
          {error && <p className="text-danger error-text">{error}</p>}
        </div>
      </div>
    </DragWrapper>
  );
};

export default Radio;
