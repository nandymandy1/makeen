import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { useState } from "react";
import DragWrapper from "@utils/DragWrapper";

const Checkbox = ({
  id,
  name,
  label,
  options = [],
  error = null,
  optProps = {
    size: 22,
  },
  color = "#047aff",
  draggable = "false",
  onChange = () => {},
}) => {
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
          selected: !opt.selected,
        };
      }
      return oopt;
    });
    setOption(updatedOpts);
    onChange({ [name]: updatedOpts });
  };

  return (
    <DragWrapper draggable={draggable}>
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
                <MdCheckBoxOutlineBlank color="#909497" {...optProps} />
              ) : (
                <>
                  {!opt.selected && (
                    <MdCheckBoxOutlineBlank color={color} {...optProps} />
                  )}
                  {opt.selected && <MdCheckBox color={color} {...optProps} />}
                </>
              )}
              <p style={{ marginLeft: 10 }}>{opt.label}</p>
            </div>
          ))}
        </div>
        {error && <p className="text-danger error-text">{error}</p>}
      </div>
    </DragWrapper>
  );
};

export default Checkbox;
