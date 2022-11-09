import IconButton from "@components/Button/IconButton";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import styled from "styled-components";

export const GridBuilderContainer = styled.div`
  width: 98%;
  padding: 10px;
  display: flex;
  margin-top: 10px;
  min-height: 150px;
  align-items: center;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;

export const GridRowController = styled.div`
  display: flex;
  margin-left: 5px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const GridCell = styled.div`
  flex: 1;
  padding: 10px;
  min-height: 140px;
  border: 1px rgba(0, 0, 0, 0.4) dashed;
`;

export const TextInput = styled.input`
  width: 99%;
  height: 35px;
  font-size: 18px;
  padding-left: 10px;
`;

export const Input = ({ id, label = "", ...restProps }) => {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <TextInput type="text" id={id} {...restProps} />
    </>
  );
};

export const CheckboxGroup = ({
  id,
  opts = [],
  label = "",
  defaultValue = null,
  ...restProps
}) => {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <TextInput type="text" id={id} {...restProps} />
    </>
  );
};

const FieldRenderer = {
  input: (field) => <Input {...field} />,
  checkbox: (field) => <CheckboxGroup {...field} />,
};

export const FormField = ({ contents }) => {
  const [field] = contents;
  return (FieldRenderer[field.elementType] || FieldRenderer["input"])(field);
};

export const GridContainer = ({
  cells = [],
  addOrRemoveGridCell = () => {},
}) => (
  <GridBuilderContainer>
    {cells.map((col) => (
      <GridCell id={col.id} key={col.id} className="cell">
        {col.children.length > 0 && <FormField contents={col.children} />}
      </GridCell>
    ))}
    <GridRowController>
      <IconButton
        rounded
        width={25}
        height={25}
        onClick={() => addOrRemoveGridCell("+")}
      >
        <BsPlusLg size={13} color="rgba(0,0,0,0.4)" />
      </IconButton>
      <IconButton
        rounded
        width={25}
        height={25}
        onClick={() => addOrRemoveGridCell("-")}
      >
        <BsDashLg size={13} color="rgba(0,0,0,0.4)" />
      </IconButton>
    </GridRowController>
  </GridBuilderContainer>
);
