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
  color = "#047aff",
  onChange = () => {},
}) => {
  const [option, setOption] = useState(
    options.map((opt) => ({ ...opt, selected: false }))
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
      </div>
    </div>
  );
};

export default Radio;
