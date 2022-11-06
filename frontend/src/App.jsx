import AppContainer, { AppContent, AppSidebar } from "@components/AppLayout";
import MkButton from "@components/Button";
import IconButton from "@components/Button/IconButton";
import { FormsLayoutBuilder, FormsContainer } from "@components/Form";
import Modal, { ModalHeader } from "@components/Modal";
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

const App = () => {
  const elementRef = useRef(null);
  const [isOpen, toggleModal] = useToggle();

  // Stores the form list
  const [forms, setForms] = useState([]);

  // Stores the form content
  const [formContent, setFormContent] = useState([]);

  const handleDrag = ({ props: { type } }) => (elementRef.current = type);

  const handleDrop = (e) => {
    setFormContent([
      ...formContent,
      {
        id: v4(),
        elementType: elementRef.current,
      },
    ]);
    elementRef.current = null;
  };

  return (
    <AppContainer>
      <AppSidebar>
        {forms.length > 0 && <FormsContainer></FormsContainer>}
        <WidgetContainer>
          <Heading style={{ alignSelf: "start", marginLeft: "60px" }}>
            Cell layout
          </Heading>
          <Widget onDrag={handleDrag} title="Table" type="table" />
        </WidgetContainer>

        <WidgetContainer>
          <Heading style={{ alignSelf: "start", marginLeft: "60px" }}>
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
          onDragLeave={(e) => handleDrop({ e, eventType: "LEAVE" })}
        ></FormsLayoutBuilder>
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
      </Modal>
    </AppContainer>
  );
};

export default App;
