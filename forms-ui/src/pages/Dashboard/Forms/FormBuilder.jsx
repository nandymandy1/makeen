import { IconButtonRounded } from "@components/Button";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
import { v4 } from "uuid";
import Field, { FieldRenderer } from "@components/Fields";

const FormContainer = styled.div`
  height: 80vh;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  overflow-y: scroll;
  padding-right: 50px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const TableRenderer = ({
  table,
  addTableRow = () => {},
  addTableColumn = () => {},
  removeTableRow = () => {},
  removeTableColumn = () => {},
}) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <table.type>
          {table.children.map((child) => (
            <child.type key={child.id}>
              {child.children.map((item) => (
                <item.type key={item.id}>
                  {item?.children ? (
                    <Field {...item.children} />
                  ) : (
                    <div
                      style={{
                        width: 100,
                        height: 100,
                        visibility: "hidden",
                      }}
                    ></div>
                  )}
                </item.type>
              ))}
            </child.type>
          ))}
        </table.type>
        <div className="d-flex flex-column align-items-center justify-content-center ms-2">
          <IconButtonRounded
            rounded="full"
            onClick={() => addTableRow(table.id)}
          >
            <AiOutlinePlus />
          </IconButtonRounded>
          <IconButtonRounded
            rounded="full"
            onClick={() => removeTableRow(table.id)}
          >
            <AiOutlineMinus />
          </IconButtonRounded>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-end">
        <IconButtonRounded
          rounded="full"
          onClick={() => addTableColumn(table.id)}
        >
          <AiOutlinePlus />
        </IconButtonRounded>
        <IconButtonRounded
          rounded="full"
          onClick={() => removeTableColumn(table.id)}
        >
          <AiOutlineMinus />
        </IconButtonRounded>
      </div>
    </>
  );
};

const FormContentRenderer = {
  table: ({
    addTableRow,
    addTableColumn,
    removeTableRow,
    removeTableColumn,
    ...props
  }) => {
    const actionProps = {
      addTableRow,
      addTableColumn,
      removeTableRow,
      removeTableColumn,
    };
    return <TableRenderer {...actionProps} table={props} />;
  },

  ...FieldRenderer,
};

const ContentRenderer = ({ type = "table", ...restProps }) =>
  FormContentRenderer[type]({ ...restProps, type });

const TableRowGenerator = ({ numberOfCols = 1 }) => ({
  id: v4(),
  type: "tr",
  children: [...new Array(numberOfCols)].map(() => TableColumnGenerator()),
});

const TableColumnGenerator = () => ({
  id: v4(),
  type: "td",
  children: null,
});

const FormBuilder = () => {
  const [formContents, setFormContents] = useState([
    {
      id: v4(),
      type: "table",
      children: [
        {
          id: v4(),
          type: "tr",
          children: [
            {
              id: v4(),
              type: "td",
              children: null,
            },
            {
              id: v4(),
              type: "td",
              children: {
                id: v4(),
                type: "input",
                control: "input",
                placeholder: "Your Name",
                label: "Please Enter your name",
              },
            },
          ],
        },
      ],
    },
    {
      id: v4(),
      type: "input",
      placeholder: "Your Name",
      label: "Please Enter your name",
    },
    {
      id: v4(),
      type: "checkbox",
      control: "checkbox",
      label: "Please Enter your name",
      options: [
        { label: "Option One", value: "1" },
        { label: "Option Two", value: "2" },
        { label: "Option Three", value: "3" },
        { label: "Option Four", value: "4" },
      ],
    },
    {
      id: v4(),
      type: "radio",
      control: "radio",
      label: "Please Enter your name",
      options: [
        { label: "Option One", value: "1" },
        { label: "Option Two", value: "2" },
        { label: "Option Three", value: "3" },
        { label: "Option Four", value: "4" },
      ],
    },
  ]);

  const addTableRow = (id) => {
    const updatedFormContents = formContents.map((content) => {
      if (content.type !== "table") {
        return content;
      }

      const numberOfCols = content.children[0].children.length || 1;

      if (content.id === id) {
        content.children = [
          ...content.children,
          TableRowGenerator({ numberOfCols }),
        ];
      }
      return content;
    });

    setFormContents(updatedFormContents);
  };

  const removeTableRow = (id) => {
    console.log({ id });
    const updatedFormContents = formContents.map((content) => {
      if (content.type !== "table") {
        return content;
      }

      if (content.id === id) {
        content.children = [];
      }

      return content;
    });

    setFormContents(updatedFormContents);
  };

  const addTableColumn = (id) => {
    console.log({ id });
  };

  const removeTableColumn = (id) => {
    console.log({ id });
  };

  return (
    <>
      <FormContainer className="form-builder">
        {formContents.map((content) => (
          <ContentRenderer
            addTableRow={addTableRow}
            addTableColumn={addTableColumn}
            removeTableRow={removeTableRow}
            removeTableColumn={removeTableColumn}
            key={content.id}
            {...content}
          />
        ))}
      </FormContainer>
    </>
  );
};

export default FormBuilder;
