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

  const handleDrag = ({ props: { type } }) => {
    elementRef.current = type;
  };

  const handleDrop = (e) => {
    if (elementRef.current === "grid" && e.onDragEl === "GRID") {
      pushFormContent({
        id: v4(),
        Element: GridContainer,
        elementType: elementRef.current,
        children: [{ id: v4(), children: [] }],
      });
      elementRef.current = null;
    }

    if (e.e.target.className.includes("cell")) {
      const { target } = e.e;

      // get the index of target cell's grid and then update it
      const targetGridIndex = formContents.findIndex((content) =>
        content.cells.some((cell) => cell.id === target.id)
      );

      const targetGridCell = formContents[targetGridIndex].children.find(
        (cell) => cell.id === target.id
      );

      targetGridCell.children = [
        {
          id: v4(),
          rules: [],
          label: "",
          elementType: elementRef.current,
        },
      ];

      const updatedTargetGrid = {
        ...formContents[targetGridIndex].children,
      };

      console.log({ updatedTargetGrid });

      elementRef.current = null;
    }
  };

  console.log({ formContents, el: elementRef.current });

  useEffect(() => {
    setFormContents([
      {
        id: v4(),
        Element: GridContainer,
        elementType: elementRef.current,
        cells: [{ id: v4(), children: [] }],
      },
    ]);
  }, []);

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
          {formContents.map(({ Element, id, cells }) => (
            <Element key={id} passedEl={elementRef} cells={cells} />
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
