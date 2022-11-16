import { v4 } from "uuid";

export const tableRowGenerator = ({ numberOfCols = 1 }) => ({
  id: v4(),
  type: "tr",
  children: [...new Array(numberOfCols)].map(() => tableColumnGenerator()),
});

export const tableColumnGenerator = () => ({
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

export const tableGenerator = ({ rows = 1, columns = 1 }) => ({
  id: v4(),
  type: "table",
  children: [...new Array(+rows)].map(() =>
    tableRowGenerator({ numberOfCols: +columns })
  ),
});

export const textFieldGenerator = ({ content }) => ({
  content,
  id: v4(),
  type: "text",
});

const FieldGenerator = {
  table: (props) => tableGenerator(props),
  input: (props) => inputGenerator(props),
  radio: (props) => radioGenerator(props),
  row: (props) => tableRowGenerator(props),
  file: (props) => fileInputGenerator(props),
  text: (props) => textFieldGenerator(props),
  divider: (props) => dividerGenerator(props),
  checkbox: (props) => checkboxGenerator(props),
  column: (props) => tableColumnGenerator(props),
};

export default FieldGenerator;
