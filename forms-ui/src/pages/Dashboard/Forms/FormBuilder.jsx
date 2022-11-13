import { FieldRenderer } from "@components/Fields";
import { BuilderTableRenderer } from "@components/Table";
import { addFormContent } from "@store/Reducers/Form/actions";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const FormContainer = styled.div`
  height: 80vh;
  padding: 10px;
  border-radius: 5px;
  overflow-y: scroll;
  margin-bottom: 20px;
  padding-right: 50px;
  border: 1px dashed rgba(0, 0, 0, 0.2);
`;

const FormContentRenderer = {
  table: (props) => <BuilderTableRenderer table={props} />,
  ...FieldRenderer,
};

const ContentRenderer = ({ type = "table", ...restProps }) =>
  FormContentRenderer[type]({ ...restProps, type });

const FormBuilder = () => {
  const dispatch = useDispatch();
  const handleElementDrop = () => dispatch(addFormContent());
  const { formContents = [] } = useSelector((state) => state.Form.formBuilder);

  return (
    <>
      <FormContainer onDragLeave={handleElementDrop} className="form-builder">
        {formContents.map((content) => (
          <ContentRenderer key={content.id} draggable="true" {...content} />
        ))}
      </FormContainer>
    </>
  );
};

export default FormBuilder;
