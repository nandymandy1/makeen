import AppLink from "@components/AppLink";
import { CustomButton } from "@components/Button";
import Card from "@components/Card";
import FormBuilderContainer from "@components/Forms/FormBuilderContainer";
import ContentRenderer from "@components/Forms/FormContentRenderer";
import { setActiveFormForPreview } from "@store/Reducers/Form/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const FormPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentForm, formsLoading } = useSelector((state) => state.Form);

  useEffect(() => {
    dispatch(setActiveFormForPreview(id, {}));
  }, []);

  if (formsLoading) {
    return <p>Loading ...</p>;
  } else {
    return (
      <div>
        <Card>
          <div className="card-header d-flex justify-content-between align-items-center">
            <h3>{currentForm?.title}</h3>
            <CustomButton
              pill="pill"
              text="#047aff"
              border="#047aff"
              primary="#F7F9F9"
              onClick={() => navigate(`/forms/builder/${id}`)}
            >
              Edit Form
            </CustomButton>
          </div>
          <div className="card-body">
            <p className="mt-3 mb-2">{currentForm?.description}</p>
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
