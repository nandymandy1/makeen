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
import DragWrapper from "@utils/DragWrapper";

const BuilderTableRenderer = ({
  table: {
    id,
    type: Table,
    draggable = "false",
    onDragEnter = () => {},
    onDragStart = () => {},
    onDragOver = () => {},
    onDragEnd = () => {},
    ...table
  },
}) => {
  const dispatch = useDispatch();

  const dragProps = {
    onDragEnd,
    onDragEnter,
    onDragOver,
    onDragStart,
  };

  return (
    <DragWrapper draggable={draggable} style={{ margin: 10 }} {...dragProps}>
      <div className="d-flex justify-content-between align-items-center">
        <Table>
          {table.children.map(({ type: Row, ...row }) => (
            <Row key={row.id}>
              {row.children.map(({ type: Col, ...col }) => (
                <Col key={col.id}>
                  {col?.children ? (
                    <Field {...col.children} />
                  ) : (
                    <div
                      style={{
                        width: 100,
                        height: 100,
                        visibility: "hidden",
                      }}
                    >
                      <p></p>
                    </div>
                  )}
                </Col>
              ))}
            </Row>
          ))}
        </Table>
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
    </DragWrapper>
  );
};

export default BuilderTableRenderer;
