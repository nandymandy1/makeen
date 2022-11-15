import StyledButton, { CustomButton } from "@components/Button";
import FormBuilderContainer from "@components/Forms/FormBuilderContainer";
import ContentRenderer from "@components/Forms/FormContentRenderer";
import FormFieldDialog from "@components/Forms/FormFieldDialog";
import { useToast } from "@components/Toast";
import { useDialogContext } from "@hooks/useModal";
import {
  addFormContent,
  handleWidgetAction,
  reOrderFormContents,
  saveForm,
  setActiveDraggedElement,
  setActiveFormForPreview,
  setFormBuilder,
} from "@store/Reducers/Form/actions";
import { capitalizeFirstLetter } from "@utils/textUtility";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const FormBuilder = () => {
  let { id } = useParams();
  const fieldProps = useRef();
  const dragItem = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dragOverItem = useRef(null);
  const { showToast } = useToast();

  const { showDialog } = useDialogContext();

  const {
    _id,
    draggedElement,
    formContents = [],
  } = useSelector((state) => state.Form.formBuilder);

  const successCallback = (props) => showToast(props);
  const prepareFormBuilder = () => dispatch(setFormBuilder(id, null));
  const updateFormContents = () => dispatch(saveForm(successCallback));
  const handleAction = (action, id) => dispatch(handleWidgetAction(action, id));
  const handleElementDrop = async () => {
    if (draggedElement === null) {
      return;
    }

    if (draggedElement === "table") {
      const confirmed = await showDialog({
        cancelButtonText: "Cancel",
        okayButtonText: "Add Table",
        title: <h4>Add Table Properties</h4>,
        body: <FormFieldDialog ref={fieldProps} />,
      });
      if (!confirmed) {
        dispatch(setActiveDraggedElement(null));
        return;
      }
      const { table } = fieldProps.current.getFormProps();
      console.log({ table });
      dispatch(addFormContent(table));
      return;
    }

    if (draggedElement === "divider") {
      dispatch(addFormContent({ type: "divider" }));
      return;
    }

    const confirmed = await showDialog({
      cancelButtonText: "Cancel",
      title: <h4>Add Field Properties</h4>,
      body: <FormFieldDialog ref={fieldProps} />,
      okayButtonText: `Add ${capitalizeFirstLetter(draggedElement)}`,
    });

    if (!confirmed) {
      dispatch(setActiveDraggedElement(null));
      return;
    } else {
      const { form } = fieldProps.current.getFormProps();
      dispatch(addFormContent(form));
    }
  };

  const previewForm = () =>
    dispatch(
      setActiveFormForPreview(null, {
        builder: true,
        callback: () => navigate(`/forms/preview/${_id}`),
      })
    );

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
  }, [id]);

  return (
    <>
      <FormBuilderContainer
        className="form-builder"
        onDragLeave={handleElementDrop}
      >
        {formContents.map((content, i) => (
          <ContentRenderer
            preview={false}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
            onDragStart={() => (dragItem.current = i)}
            onDragEnter={() => (dragOverItem.current = i)}
            handleWidgetActionClick={(action) =>
              handleAction(action, content.id)
            }
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
          className="ms-2"
          border="#047aff"
          primary="#F7F9F9"
          onClick={previewForm}
        >
          Preview Form
        </CustomButton>
      </div>
    </>
  );
};

export default FormBuilder;
