import AppContainer, { AppContent, AppSidebar } from "@components/AppLayout";
import MkButton from "@components/Button";
import IconButton from "@components/Button/IconButton";
import { FormsContainer, FormsLayoutBuilder } from "@components/Form";
import { Col, Grid, Row } from "@components/Grid";
import Modal, { ModalContent, ModalHeader } from "@components/Modal";
import { Heading } from "@components/Typography";
import Widget, { WidgetContainer } from "@components/Widget";
import useToggle from "@hooks/useToggle";
import { useRef, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { v4 } from "uuid";

const Widgets = [
  { title: "Input", type: "input" },
  { title: "Checkbox", type: "checkbox" },
  { title: "File Uploader", type: "uploader" },
  { title: "Text", type: "text" },
  { title: "Divider", type: "divider" },
];

const gridLayoutGenerator = ({ rowsNo = 1, colsNo = 1 }) => [
  {
    rows: Array.from({ length: rowsNo }, (_) => ({
      id: v4(),
      cols: Array.from({ length: colsNo }, (_) => ({
        id: v4(),
        children: [],
      })),
    })),
    id: v4(),
  },
];

const App = () => {
  const elementRef = useRef(null);
  const [isOpen, toggleModal] = useToggle();

  // Stores the form list
  const [forms, setForms] = useState([]);
  const [gridLayout, setGridLayout] = useState([]);

  // Stores the form content
  const [formContents, setFormContents] = useState([]);

  const handleDrag = ({ props: { type } }) => {
    elementRef.current = type;
    if (type === "table") {
      setGridLayout(gridLayoutGenerator({ colsNo: 3, rowsNo: 2 }));
    }
  };

  const handleDrop = (e) => {
    let contents = [];

    if (elementRef.current === "table" && e.onDragEl === "GRID") {
      contents = [
        ...formContents,
        {
          id: v4(),
          grid: gridLayout,
          elementType: elementRef.current,
        },
      ];

      setGridLayout([]);
      setFormContents(contents);
    }

    elementRef.current = null;
  };

  console.log({ formContents });

  return (
    <AppContainer>
      <AppSidebar>
        {forms.length > 0 && <FormsContainer></FormsContainer>}
        <WidgetContainer>
          <Heading style={{ alignSelf: "start", marginLeft: "45px" }}>
            Cell layout
          </Heading>
          <Widget onDrag={handleDrag} title="Table" type="table" />
        </WidgetContainer>

        <WidgetContainer>
          <Heading style={{ alignSelf: "start", marginLeft: "45px" }}>
            Form Components
          </Heading>
          {Widgets.map((widget) => (
            <Widget key={widget.type} onDrag={handleDrag} {...widget} />
          ))}
        </WidgetContainer>
      </AppSidebar>
      <AppContent>
        <Heading
          type="h3"
          style={{ textAlign: "center", marginTop: -10, color: "#D8D8D8" }}
        >
          Drop & Create
        </Heading>
        <FormsLayoutBuilder
          onDragLeave={(e) => handleDrop({ e, onDragEl: "GRID" })}
        >
          {formContents.map(({ id: contentId, grid }) => (
            <div key={contentId} style={{ paddingTop: 50, paddingBottom: 30 }}>
              {grid.map(({ rows, id: gridId }) => (
                <div>
                  <Grid key={gridId}>
                    {rows.map(({ id: rowId, cols }) => (
                      <Row key={rowId}>
                        {cols.map((col) => (
                          <Col size={1} key={col.id}></Col>
                        ))}
                      </Row>
                    ))}
                  </Grid>
                </div>
              ))}
            </div>
          ))}
        </FormsLayoutBuilder>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MkButton
            rounded
            variant="primary"
            onClick={toggleModal}
            pIcon={<BiDownload size={16} />}
          >
            Save
          </MkButton>
        </div>
      </AppContent>

      <Modal show={isOpen}>
        <ModalHeader>
          <Heading
            type="h1"
            style={{ marginTop: -10, color: "#D8D8D8", fontSize: "2.5em" }}
          >
            Preview
          </Heading>
          <IconButton onClick={toggleModal}>
            <MdOutlineClose color="#000" />
          </IconButton>
        </ModalHeader>
        <ModalContent></ModalContent>
      </Modal>
    </AppContainer>
  );
};

export default App;

/*
{formContent.map(
            (form) =>
              {form.grid.map<Grid draggable="true" key={grid.id}>
              ({
                {grid.rows.map((row) => (
                <Row key={row.id}>
                  {row.cols.map((col) => (
                    <Col
                      key={col.id}
                      onDragLeave={(e) =>
                        handleDrop({ e, onDragEl: "COL", colId: col.id })
                      }
                      size={1}
                    >
                      {col.children}
                    </Col>
                  ))}
                </Row>
              ))} 
            })
            </Grid>}
          )}
*/
