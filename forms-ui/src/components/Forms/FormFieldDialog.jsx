import StyledButton, { IconButtonRounded } from "@components/Button";
import Field from "@components/Fields";
import useInput from "@hooks/useInput";
import { forwardRef, useImperativeHandle } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { v4 } from "uuid";

const initialFormValues = {
  name: "",
  label: "",
  placeholder: "",
  options: [],
  content: "",
};

const initialTableProps = {
  rows: 1,
  columns: 1,
};

const FormFieldDialog = ({}, ref) => {
  const [tableProps, setTableProps] = useInput(initialTableProps);
  const [form, setFormValues, updateForm] = useInput(initialFormValues);
  const { draggedElement } = useSelector((state) => state.Form.formBuilder);

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

  useImperativeHandle(ref, () => ({
    getFormProps: () => ({ form, table: tableProps }),
    resetFormProps: () => updateForm(initialFormValues),
  }));

  if (draggedElement === "text") {
    return (
      <div>
        <Field
          id={v4()}
          type="input"
          name="content"
          value={form.content}
          onChange={setFormValues}
          placeholder="Enter Text Content"
          label="Enter Text To be displayed"
        />
      </div>
    );
  }

  if (draggedElement === "table") {
    return (
      <>
        <div>
          <Field
            id={v4()}
            min={1}
            max={10}
            name="rows"
            type="number"
            label="Rows"
            value={tableProps.rows}
            onChange={setTableProps}
            placeholder="Number of Rows"
          />
        </div>
        <div>
          <Field
            min={1}
            max={10}
            id={v4()}
            type="number"
            name="columns"
            onChange={setTableProps}
            label="Number of Columns"
            value={tableProps.columns}
            placeholder="Enter Text Content"
          />
        </div>
      </>
    );
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
      {draggedElement === "input" && (
        <Field
          id={v4()}
          type="input"
          name="placeholder"
          value={form.placeholder}
          onChange={setFormValues}
          label="Enter Field Placeholder"
          placeholder="Field Placeholder"
        />
      )}
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

export default forwardRef(FormFieldDialog);
