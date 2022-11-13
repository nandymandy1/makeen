import { v4 } from "uuid";

export const TableRowGenerator = ({ numberOfCols = 1 }) => ({
  id: v4(),
  type: "tr",
  children: [...new Array(numberOfCols)].map(() => TableColumnGenerator()),
});

export const TableColumnGenerator = () => ({
  id: v4(),
  type: "td",
  children: null,
});

export const inputGenerator = ({ name, label = "", placeholder = "" }) => ({
  name,
  label,
  id: v4(),
  placeholder,
  type: "input",
  control: "input",
});

export const checkboxGenerator = ({ name, label = "", options = [] }) => ({
  name,
  label,
  options,
  id: v4(),
  type: "checkbox",
  control: "checkbox",
});

export const radioGenerator = ({ name, label = "", options = [] }) => ({
  name,
  label,
  options,
  id: v4(),
  type: "radio",
  control: "radio",
});

export const fileInputGenerator = ({ name, label = "" }) => ({
  name,
  label,
  id: v4(),
  type: "file",
  control: "file",
});

export const dividerGenerator = () => ({
  id: v4(),
  type: "divider",
});

export const tableGenerator = () => ({
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
      ],
    },
  ],
});

const FieldGenerator = {
  table: (props) => tableGenerator(props),
  input: (props) => inputGenerator(props),
  radio: (props) => radioGenerator(props),
  row: (props) => TableRowGenerator(props),
  file: (props) => fileInputGenerator(props),
  divider: (props) => dividerGenerator(props),
  checkbox: (props) => checkboxGenerator(props),
  column: (props) => TableColumnGenerator(props),
};

export default FieldGenerator;
