import AppContainer, { AppContent, AppSidebar } from "@components/AppLayout";
import MkButton from "@components/Button";
import IconButton from "@components/Button/IconButton";
import {
  FormsContainer,
  FormsLayoutBuilder,
  FormsLayoutBuilderFooter,
} from "@components/Form";
import { GridContainer } from "@components/Grid/Builder";
import Modal, { ModalContent, ModalHeader } from "@components/Modal";
import { Heading } from "@components/Typography";
import Widget, { WidgetContainer } from "@components/Widget";
import useArray from "@hooks/useArray";
import useToggle from "@hooks/useToggle";
import { useEffect, useRef, useState } from "react";
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

const App = () => {
  const elementRef = useRef(null);
  const [isOpen, toggleModal] = useToggle();

  // Stores the form list
  const [forms, setForms] = useState([]);
  const [
    formContents,
    pushFormContent,
    clearFormContents,
    filterFormContents,
    removeFormContents,
    updateFormContents,
    setFormContents,
  ] = useArray([]);

  const handleDrag = ({ props: { type } }) => (elementRef.current = type);

  const handleDrop = (e) => {
    if (elementRef.current === "grid" && e.onDragEl === "GRID") {
      setFormContents([
        ...formContents,
        {
          id: v4(),
          elementType: elementRef.current,
          children: [{ id: v4(), children: [], type: "cell" }],
        },
      ]);

      elementRef.current = null;
      return;
    }

    if (e.e.target.className.includes("cell")) {
      const { target } = e.e;

      let targetGrid = formContents.find((grid) =>
        grid.children.some((cell) => cell.id === target.id)
      );

      let targetGridCell = targetGrid.children.find(
        (cell) => cell.id === target.id
      );

      targetGridCell.children = [
        {
          id: v4(),
          elementType: elementRef.current,
        },
      ];

      targetGrid.children = targetGrid.children.map((cell) =>
        cell.id === targetGridCell.id ? targetGridCell : cell
      );

      setFormContents(
        formContents.map((grid) => {
          if (grid.id === targetGrid.id) {
            return targetGrid;
          }
          return grid;
        })
      );

      elementRef.current = null;
      return;
    }
  };

  const addOrRemoveGridCell = (type = "+", id) => {
    const grid = formContents.find((content) => content.id === id);

    if (!grid) {
      return;
    }

    let { children } = grid;

    if (type === "+") {
      children.push({ id: v4(), children: [], elementType: "cell" });
    }

    if (type === "-") {
      if (children.length === 1) return;
      children = children.filter(
        (child) => children[children.length - 1].id !== child.id
      );
    }

    grid.children = children;

    setFormContents(
      formContents.map((formGrid) =>
        formGrid.id === grid.id ? grid : formGrid
      )
    );
  };

  useEffect(() => {
    setFormContents([
      {
        id: v4(),
        elementType: "grid",
        children: [{ id: v4(), children: [], elementType: "cell" }],
      },
    ]);
  }, []);

  console.log({ formContents });

  return (
    <AppContainer>
      <AppSidebar>
        {forms.length > 0 && <FormsContainer></FormsContainer>}
        <WidgetContainer>
          <Heading style={{ alignSelf: "start", marginLeft: "45px" }}>
            Cell layout
          </Heading>
          <Widget onDrag={handleDrag} title="Grid" type="grid" />
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
          style={{
            marginTop: -10,
            marginBottom: 15,
            color: "#D8D8D8",
            textAlign: "center",
          }}
        >
          Drop & Create
        </Heading>
        <FormsLayoutBuilder
          onDragLeave={(e) => handleDrop({ e, onDragEl: "GRID" })}
        >
          {formContents.map(({ id, children }) => (
            <GridContainer
              key={id}
              cells={children}
              addOrRemoveGridCell={(type) => addOrRemoveGridCell(type, id)}
            />
          ))}
        </FormsLayoutBuilder>
        <FormsLayoutBuilderFooter>
          <MkButton
            rounded
            variant="light"
            onClick={clearFormContents}
            pIcon={<BiDownload size={16} />}
          >
            Reset Form
          </MkButton>
          <MkButton
            rounded
            variant="primary"
            onClick={toggleModal}
            pIcon={<BiDownload size={16} />}
          >
            Save Form
          </MkButton>
        </FormsLayoutBuilderFooter>
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
