import Field from "@components/Fields";
import useInput from "@hooks/useInput";
import { forwardRef, useImperativeHandle } from "react";

const AddForm = (props, ref) => {
  const [form, setFormContent] = useInput({
    title: "",
    description: "",
  });

  useImperativeHandle(ref, () => ({
    getFormValues: () => form,
  }));

  return (
    <div>
      <Field
        name="title"
        control="input"
        label="Form Name"
        value={form.title}
        placeholder="Form Name"
        onChange={setFormContent}
      />
      <Field
        control="input"
        name="description"
        label="Form Description"
        value={form.description}
        onChange={setFormContent}
        placeholder="Form Description"
      />
    </div>
  );
};

export default forwardRef(AddForm);
