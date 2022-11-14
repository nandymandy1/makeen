import FormBuilderContainer from "@components/Forms/FormBuilderContainer";
import { useDialogContext } from "@hooks/useModal";
import { setActiveDraggedElement } from "@store/Reducers/Form/actions";
import { useDispatch, useSelector } from "react-redux";
import ContentRenderer from "@components/Forms/FormContentRenderer";
import FormFieldDialog from "@components/Forms/FormFieldDialog";

const FormBuilder = () => {
  const dispatch = useDispatch();
  const { showDialog } = useDialogContext();

  const handleElementDrop = async () => {
    const confirmed = await showDialog({
      body: <FormFieldDialog />,
      cancelButtonText: "Cancel",
      okayButtonText: "Add Field",
      title: <h4>Add Field Properties</h4>,
    });

    if (!confirmed) {
      dispatch(setActiveDraggedElement(null));
      return;
    }
  };

  const { formContents = [] } = useSelector((state) => state.Form.formBuilder);

  return (
    <>
      <FormBuilderContainer
        className="form-builder"
        onDragLeave={handleElementDrop}
      >
        {formContents.map((content) => (
          <ContentRenderer key={content.id} draggable="true" {...content} />
        ))}
      </FormBuilderContainer>
    </>
  );
};

export default FormBuilder;
