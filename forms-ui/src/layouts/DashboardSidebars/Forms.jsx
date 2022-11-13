import FormsContainer from "@components/Forms/FormsContainer";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconButtonRounded } from "@components/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import Widget, { WidgetContainer } from "@components/Widget";

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
  { title: "File Uploader", type: "file" },
  { title: "Text", type: "text" },
  { title: "Divider", type: "divider" },
];

const FormSidebar = () => {
  const { forms } = useSelector((state) => state.Form);

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
      <WidgetContainer>
        <div>
          <h3>Cell Layouts</h3>
        </div>
        <div>
          <Widget title="Grid" type="grid" />
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
