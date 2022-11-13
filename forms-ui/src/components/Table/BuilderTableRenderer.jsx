import { IconButtonRounded } from "@components/Button";
import Field from "@components/Fields";
import {
  addTableCol,
  addTableRow,
  removeTableCol,
  removeTableRow,
} from "@store/Reducers/Form/actions";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const TableContainer = styled.div`
  margin: 15px 5px;
  padding: 15px 5px;
`;

const BuilderTableRenderer = ({
  table: { id, draggable = false, ...table },
}) => {
  const dispatch = useDispatch();

  return (
    <TableContainer draggable={draggable} style={{ margin: 10 }}>
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
            onClick={() => dispatch(addTableRow(id))}
          >
            <AiOutlinePlus />
          </IconButtonRounded>
          <IconButtonRounded
            rounded="full"
            onClick={() => dispatch(removeTableRow(id))}
          >
            <AiOutlineMinus />
          </IconButtonRounded>
        </div>
      </div>

      <div
        style={{ marginTop: 10 }}
        className="d-flex align-items-center justify-content-end"
      >
        <IconButtonRounded
          rounded="full"
          onClick={() => dispatch(addTableCol(id))}
        >
          <AiOutlinePlus />
        </IconButtonRounded>
        <IconButtonRounded
          rounded="full"
          onClick={() => dispatch(removeTableCol(id))}
        >
          <AiOutlineMinus />
        </IconButtonRounded>
      </div>
    </TableContainer>
  );
};

export default BuilderTableRenderer;
