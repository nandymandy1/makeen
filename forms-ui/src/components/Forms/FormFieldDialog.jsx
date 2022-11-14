import StyledButton, { IconButtonRounded } from "@components/Button";
import Field from "@components/Fields";
import useInput from "@hooks/useInput";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { AiOutlineClose } from "react-icons/ai";

const FormFieldDialog = () => {
  const { draggedElement } = useSelector((state) => state.Form.formBuilder);

  const [form, setFormValues, updateForm] = useInput({
    text: "",
    name: "",
    label: "",
    options: [],
  });

  const addOption = () => {
    const updatedOptions = [
      ...form.options,
      { id: v4(), label: "", value: "" },
    ];
    updateForm({ ...form, options: updatedOptions });
  };

  const setOptValues = (labelId, { target: { value, name } }) => {
    const updatesFormOptions = form.options.map((opt) =>
      labelId === opt.id ? { ...opt, [name]: value } : opt
    );
    updateForm({ ...form, options: updatesFormOptions });
  };

  const removeOpt = (id) => {
    const updatedFormOptions = form.options.filter((opt) => opt.id !== id);
    updateForm({ ...form, options: updatedFormOptions });
  };

  if (draggedElement === "text") {
    return (
      <div>
        <Field
          id={v4()}
          name="text"
          type="input"
          value={form.text}
          placeholder="Enter Text"
          onChange={setFormValues}
          label="Enter Text To be displayed"
        />
      </div>
    );
  }

  if (draggedElement === "table") {
    return <></>;
  }

  return (
    <div>
      <Field
        id={v4()}
        name="name"
        type="input"
        value={form.name}
        label="Enter Field Name"
        placeholder="Field Name"
        onChange={setFormValues}
      />
      <Field
        id={v4()}
        name="label"
        type="input"
        value={form.label}
        onChange={setFormValues}
        label="Enter Field Label"
        placeholder="Field Label"
      />
      {["checkbox", "radio"].includes(draggedElement) && (
        <>
          <h4 className="mb-2">Field Options</h4>
          {form.options.map((opt, i) => (
            <div key={opt.id}>
              <p>Option {i + 1}</p>
              <div className="d-flex align-items-center mt--1">
                <Field
                  id={v4()}
                  name="label"
                  type="input"
                  value={opt.label}
                  label="Enter Option Label"
                  placeholder="Option Label"
                  onChange={(e) => setOptValues(opt.id, e)}
                />
                <Field
                  id={v4()}
                  type="input"
                  name="value"
                  value={opt.value}
                  label="Enter Option Value"
                  placeholder="Option Value"
                  onChange={(e) => setOptValues(opt.id, e)}
                />
                <IconButtonRounded onClick={() => removeOpt(opt.id)}>
                  <AiOutlineClose />
                </IconButtonRounded>
              </div>
            </div>
          ))}
          <StyledButton onClick={addOption}>Add Option</StyledButton>
        </>
      )}
    </div>
  );
};

export default FormFieldDialog;
