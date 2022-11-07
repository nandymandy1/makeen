import IconButton from "@components/Button/IconButton";
import { useState } from "react";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import styled from "styled-components";
import { v4 } from "uuid";

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
  height: 140px;
  padding: 10px;
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

export const GridContainer = ({ cells = [], passedEl = null }) => {
  const [cols, setCols] = useState(cells);

  const handleClick = (type = "+") => {
    if (type === "+") setCols([...cols, { id: v4(), children: [] }]);
    if (type === "-") {
      if (cols.length === 1) return;
      setCols(cols.filter((col) => cols[cols.length - 1].id !== col.id));
    }
  };

  const handleDrop = (e) => console.log({ e, type: "COL", passedEl });

  return (
    <GridBuilderContainer>
      {cols.map((col) => (
        <GridCell
          id={col.id}
          key={col.id}
          className="cell"
          onDragLeave={(e) => handleDrop({ e, id: col.id })}
        ></GridCell>
      ))}
      <GridRowController>
        <IconButton
          rounded
          width={25}
          height={25}
          onClick={() => handleClick("+")}
        >
          <BsPlusLg size={13} color="rgba(0,0,0,0.4)" />
        </IconButton>
        <IconButton
          rounded
          width={25}
          height={25}
          onClick={() => handleClick("-")}
        >
          <BsDashLg size={13} color="rgba(0,0,0,0.4)" />
        </IconButton>
      </GridRowController>
    </GridBuilderContainer>
  );
};
