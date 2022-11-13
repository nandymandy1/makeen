import FormsContainer from "@components/Forms/FormsContainer";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconButtonRounded } from "@components/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { v4 } from "uuid";

const FormLink = styled(Link)`
  color: #000;
  text-decoration: none;
  div {
    border-radius: 5px;
    padding: 10px 15px;
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
  { title: "File Uploader", type: "uploader" },
  { title: "Text", type: "text" },
  { title: "Divider", type: "divider" },
];

const FormSidebar = () => {
  const [forms, setForms] = useState([
    { title: "Form One", id: v4() },
    { title: "Form Two", id: v4() },
    { title: "Form Three", id: v4() },
    { title: "Form Four", id: v4() },
  ]);

  return (
    <div>
      {forms.length > 0 && (
        <FormsContainer>
          <div className="w-100 d-flex justfiy-content-between align-items-center">
            <h2>Forms</h2>
            <IconButtonRounded>
              <AiOutlinePlus />
            </IconButtonRounded>
          </div>
          <ul>
            {forms.map((form) => (
              <FormListItem key={form.id} path={`/forms/${form.id}`}>
                {form.title}
              </FormListItem>
            ))}
          </ul>
        </FormsContainer>
      )}
    </div>
  );
};

export default FormSidebar;
