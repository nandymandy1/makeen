import { useState } from "react";

const CheckboxItem = ({
  label = "",
  value = "",
  optKey = "",
  onChange = () => {},
  ...restProps
}) => {
  const handleChange = ({ target: { checked } }) =>
    onChange({ [optKey]: checked });

  return (
    <div style={{ marginBottom: 10 }}>
      <input
        id={optKey}
        name={optKey}
        value={value}
        type="checkbox"
        onChange={handleChange}
        {...restProps}
      />

      <label style={{ marginLeft: 10 }} htmlFor={optKey}>
        {label} {optKey}
      </label>
    </div>
  );
};

const CheckboxGroup = ({ label = "", options = [], onChange = () => {} }) => {
  const [finalFieldValues, setFinalFieldValues] = useState({
    ...options.reduce(
      (acc, { optKey, checked = false }) => ({ ...acc, [optKey]: checked }),
      {}
    ),
  });

  const changeHandler = (e) => {
    setFinalFieldValues((prevValues) => {
      const optsValue = {
        ...prevValues,
        ...e,
      };
      onChange(optsValue);
      return optsValue;
    });
  };

  return (
    <div>
      {label && (
        <div style={{ marginBottom: 10 }}>
          <label>{label}</label>
        </div>
      )}
      {options.map((opt) => (
        <CheckboxItem key={opt.optKey} onChange={changeHandler} {...opt} />
      ))}
    </div>
  );
};

export default CheckboxGroup;
