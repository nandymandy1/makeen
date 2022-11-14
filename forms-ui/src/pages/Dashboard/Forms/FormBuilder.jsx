import StyledButton, { CustomButton } from "@components/Button";
import FormBuilderContainer from "@components/Forms/FormBuilderContainer";
import ContentRenderer from "@components/Forms/FormContentRenderer";
import FormFieldDialog from "@components/Forms/FormFieldDialog";
import { useDialogContext } from "@hooks/useModal";
import {
  addFormContent,
  reOrderFormContents,
  saveForm,
  setActiveDraggedElement,
  setFormBuilder,
} from "@store/Reducers/Form/actions";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const FormBuilder = () => {
  let { id } = useParams();
  const fieldProps = useRef();
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const dispatch = useDispatch();
  const { showDialog } = useDialogContext();
  const { formContents = [], draggedElement } = useSelector(
    (state) => state.Form.formBuilder
  );

  const updateFormContents = () => dispatch(saveForm());
  const prepareFormBuilder = () => dispatch(setFormBuilder(id, null));

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

  const handleSort = () => {
    let _formContents = [...formContents];
    const draggedItemContent = _formContents.splice(dragItem.current, 1)[0];
    _formContents.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    dispatch(reOrderFormContents(_formContents));
  };

  useEffect(() => {
    prepareFormBuilder();
  }, []);

  return (
    <>
      <FormBuilderContainer
        className="form-builder"
        onDragLeave={handleElementDrop}
      >
        {formContents.map((content, i) => (
          <ContentRenderer
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
            onDragStart={() => (dragItem.current = i)}
            onDragEnter={() => (dragOverItem.current = i)}
            key={content.id}
            draggable="true"
            {...content}
          />
        ))}
      </FormBuilderContainer>
      <div className="d-flex justify-content-center align-items-center">
        <StyledButton pill="pill" onClick={updateFormContents}>
          Save Form
        </StyledButton>
        <CustomButton
          pill="pill"
          text="#047aff"
          border="#047aff"
          primary="#F7F9F9"
          onClick={() => {}}
          className="ms-2"
        >
          Preview Form
        </CustomButton>
      </div>
    </>
  );
};

export default FormBuilder;
