import { IconButtonRounded } from "@components/Button";
import Field from "@components/Fields";
import {
  addTableCol,
  addTableRow,
  removeTableCol,
  removeTableRow,
} from "@store/Reducers/Form/actions";
import DragWrapper from "@utils/DragWrapper";
import { getDragProps } from "@utils/getDragProps";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";

const BuilderTableRenderer = ({
  table: { id, type: Table, preview = true, draggable = "false", ...restProps },
}) => {
  const dispatch = useDispatch();
  const [dragProps, table] = getDragProps(restProps);

  const TableActions = {
    addRow: () => dispatch(addTableRow(id)),
    addColumn: () => dispatch(addTableCol(id)),
    removeRow: () => dispatch(removeTableRow(id)),
    removeColumn: () => dispatch(removeTableCol(id)),
  };

  return (
    <DragWrapper
      preview={preview}
      draggable={draggable}
      style={{ margin: 10 }}
      {...dragProps}
    >
      <div className="d-flex justify-content-between align-items-center">
        <Table>
          {table.children.map(({ type: Row, ...row }) => (
            <Row key={row.id}>
              {row.children.map(({ type: Col, ...col }) => (
                <Col key={col.id}>
                  {col.children ? (
                    <Field {...col.children} />
                  ) : (
                    <div
                      style={{
                        width: 100,
                        height: 100,
                        visibility: "hidden",
                        background: "red",
                      }}
                    ></div>
                  )}
                </Col>
              ))}
            </Row>
          ))}
        </Table>
        {!preview && (
          <div className="d-flex flex-column align-items-center justify-content-center ms-2">
            <IconButtonRounded rounded="full" onClick={TableActions.addRow}>
              <AiOutlinePlus />
            </IconButtonRounded>
            <IconButtonRounded rounded="full" onClick={TableActions.removeRow}>
              <AiOutlineMinus />
            </IconButtonRounded>
          </div>
        )}
      </div>
      {!preview && (
        <div
          style={{ marginTop: 10 }}
          className="d-flex align-items-center justify-content-end"
        >
          <IconButtonRounded rounded="full" onClick={TableActions.addColumn}>
            <AiOutlinePlus />
          </IconButtonRounded>
          <IconButtonRounded rounded="full" onClick={TableActions.removeColumn}>
            <AiOutlineMinus />
          </IconButtonRounded>
        </div>
      )}
    </DragWrapper>
  );
};

export default BuilderTableRenderer;
