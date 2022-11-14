import FormBuilderContainer from "@components/Forms/FormBuilderContainer";
import { useDialogContext } from "@hooks/useModal";
import {
  addFormContent,
  setActiveDraggedElement,
} from "@store/Reducers/Form/actions";
import { useDispatch, useSelector } from "react-redux";
import ContentRenderer from "@components/Forms/FormContentRenderer";
import FormFieldDialog from "@components/Forms/FormFieldDialog";
import { useRef } from "react";

const FormBuilder = () => {
  const fieldProps = useRef();
  const dispatch = useDispatch();
  const { showDialog } = useDialogContext();
  const { draggedElement } = useSelector((state) => state.Form.formBuilder);

  const handleElementDrop = async () => {
    if (draggedElement === null) {
      return;
    }
    if (draggedElement === "table") {
      dispatch(addFormContent());
      return;
    }

    if (draggedElement === "divider") {
      dispatch(addFormContent({ type: "divider" }));
      return;
    }

    const confirmed = await showDialog({
      cancelButtonText: "Cancel",
      okayButtonText: "Add Field",
      title: <h4>Add Field Properties</h4>,
      body: <FormFieldDialog ref={fieldProps} />,
    });

    if (!confirmed) {
      dispatch(setActiveDraggedElement(null));
      return;
    } else {
      const formProps = fieldProps.current.getFormProps();
      dispatch(addFormContent(formProps));
    }
  };

  const reOrderElementPos = (i, e) => {
    console.log(e);
  };

  const { formContents = [] } = useSelector((state) => state.Form.formBuilder);

  return (
    <>
      <FormBuilderContainer
        className="form-builder"
        onDragLeave={handleElementDrop}
      >
        {formContents.map((content, i) => (
          <ContentRenderer key={content.id} draggable="true" {...content} />
        ))}
      </FormBuilderContainer>
    </>
  );
};

export default FormBuilder;
