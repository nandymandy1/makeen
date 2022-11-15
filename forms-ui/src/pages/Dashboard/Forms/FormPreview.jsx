import Card from "@components/Card";
import FormBuilderContainer from "@components/Forms/FormBuilderContainer";
import ContentRenderer from "@components/Forms/FormContentRenderer";
import { setActiveFormForPreview } from "@store/Reducers/Form/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const FormPreview = () => {
  const dispatch = useDispatch();
  const { id, builder } = useParams();

  const { currentForm, formsLoading } = useSelector((state) => state.Form);

  useEffect(() => {
    dispatch(setActiveFormForPreview(id, {}));
  }, []);

  console.log({ currentForm });

  if (formsLoading) {
    return <p>Loading ...</p>;
  } else {
    return (
      <div>
        <Card>
          <div className="card-header">
            <h3>{currentForm?.title}</h3>
          </div>
          <div className="card-body">
            <p className="mt-3">{currentForm?.description}</p>
            <FormBuilderContainer className="form-preview">
              {currentForm?.formContents.map((content) => (
                <ContentRenderer preview key={content.id} {...content} />
              ))}
            </FormBuilderContainer>
          </div>
        </Card>
      </div>
    );
  }
};

export default FormPreview;
