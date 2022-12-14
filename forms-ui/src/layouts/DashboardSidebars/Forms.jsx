import { IconButtonRounded } from "@components/Button";
import AddForm from "@components/Forms/AddForm";
import FormsContainer from "@components/Forms/FormsContainer";
import Widget, { WidgetContainer } from "@components/Widget";
import { useDialogContext } from "@hooks/useModal";
import { createForm, fetchRecentForms } from "@store/Reducers/Form/actions";
import { useEffect, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useToast } from "@components/Toast";

const FormLink = styled(Link)`
  color: #000;
  text-decoration: none;
  div {
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 0.9em;
    font-weight: 500;
    &:hover {
      background-color: #fff;
    }
  }
`;

const FormListItem = ({ children, path }) => (
  <li>
    <FormLink to={path}>
      <div>{children}</div>
    </FormLink>
  </li>
);

const Widgets = [
  { title: "Input", type: "input" },
  { title: "Checkbox", type: "checkbox" },
  { title: "Radio Group", type: "radio" },
  { title: "File Uploader", type: "file" },
  { title: "Text", type: "text" },
  { title: "Divider", type: "divider" },
];

const FormSidebar = () => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { showDialog } = useDialogContext();
  const { recentForms = [] } = useSelector((state) => state.Form);

  const getRecentForms = () => dispatch(fetchRecentForms());

  const successCallback = (props) => showToast(props);
  const goToBuilder = ({ _id }) => navigate(`/forms/builder/${_id}`);

  const addForm = async () => {
    const isConfirmed = await showDialog({
      title: <h4>Add New Form</h4>,
      okayButtonText: "Create Form",
      body: <AddForm ref={formRef} />,
    });

    if (!isConfirmed) {
      return;
    }

    let data = formRef.current.getFormValues();
    dispatch(createForm(data, successCallback, goToBuilder));
  };

  useEffect(() => {
    getRecentForms();
  }, []);

  return (
    <div>
      {recentForms.length > 0 && (
        <FormsContainer>
          <div className="w-100 d-flex justify-content-between align-items-center">
            <h2>Forms</h2>
            <IconButtonRounded onClick={addForm}>
              <AiOutlinePlus />
            </IconButtonRounded>
          </div>
          <ul>
            {recentForms.map((form) => (
              <FormListItem key={form._id} path={`/forms/builder/${form._id}`}>
                {form.title}
              </FormListItem>
            ))}
          </ul>
        </FormsContainer>
      )}
      <WidgetContainer>
        <div>
          <h3>Cell Layouts</h3>
        </div>
        <div>
          {/* <Widget title="Grid" type="grid" /> */}
          <Widget title="Table" type="table" />
        </div>
      </WidgetContainer>

      <WidgetContainer>
        <div>
          <h3>Form Components</h3>
        </div>
        <div>
          {Widgets.map((widget) => (
            <Widget key={widget.type} {...widget} />
          ))}
        </div>
      </WidgetContainer>
    </div>
  );
};

export default FormSidebar;
