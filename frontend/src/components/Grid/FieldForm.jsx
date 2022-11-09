import { forwardRef, useImperativeHandle, useState } from "react";

const FieldRules = ({ type = "input" }, ref) => {
  const initialFormState = {
    label: "",
    fieldName: "",
    placeholder: "",
    validationRules: "",
  };

  const [formState, setFormState] = useState({ ...initialFormState });

  useImperativeHandle(ref, () => ({
    getFormValue: () => formState,
    resetForm: () => setFormState({ ...initialFormState }),
  }));

  const handleChange = ({ target: { name, value } }) =>
    setFormState({ ...formState, [name]: value });

  return (
    <>
      <div>
        <label htmlFor="label">Label</label>
        <input
          id="label"
          type="text"
          name="label"
          placeholder="Label"
          onChange={handleChange}
          value={formState.label}
        />
      </div>
      <div>
        <label htmlFor="fieldName">Field Name</label>
        <input
          type="text"
          id="fieldName"
          name="fieldName"
          placeholder="Field Name"
          onChange={handleChange}
          value={formState.fieldName}
        />
      </div>
      <div>
        <label htmlFor="placeHolder">Place Holder Text</label>
        <input
          type="text"
          id="placeholder"
          name="placeholder"
          placeholder="Placholder"
          onChange={handleChange}
          value={formState.placeholder}
        />
      </div>
      <div>
        <label htmlFor="validationRules">Validation Regex</label>
        <input
          type="text"
          id="validationRule"
          name="validationRules"
          onChange={handleChange}
          placeholder="Validation Rule"
          value={formState.validationRules}
        />
      </div>
    </>
  );
};

export default forwardRef(FieldRules);
