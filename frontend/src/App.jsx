import AppContainer, { AppContent, AppSidebar } from "@components/AppLayout";
import { Heading } from "@components/Typography";
import Widget, { WidgetContainer } from "@components/Widget";
import styled from "styled-components";
import { useRef, useState } from "react";
import { v4 } from "uuid";
import MkButton from "@components/Button";
import { BiDownload } from "react-icons/bi";
import Modal from "@components/Modal";
import useToggle from "@hooks/useToggle";

const FormsContainer = styled.div`
  width: 100%;
  padding-bottom: 3rem;
  background-color: #efefef;
`;

const FormLayoutBuilder = styled.div`
  width: 100%;
  max-height: 82%;
  min-height: 82%;
  overflow-y: scroll;
  border-radius: 3px;
  padding-bottom: 3rem;
  border: 1px dashed rgba(0, 0, 0, 0.3);
`;

const FormLayoutPreview = styled.div`
  width: 100%;
  max-height: 82%;
  min-height: 82%;
  overflow-y: scroll;
  border-radius: 3px;
  padding-bottom: 3rem;
  border: 1px dashed rgba(0, 0, 0, 0.3);
`;

const Widgets = [
  { title: "Input", type: "input" },
  { title: "Checkbox", type: "checkbox" },
  { title: "File Uploader", type: "uploader" },
  { title: "Text", type: "text" },
  { title: "Divider", type: "divider" },
];

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const App = () => {
  const elementRef = useRef(null);
  const [forms, setForms] = useState([]);
  const [isOpen, toggleModal] = useToggle();
  const [formContent, setFormContent] = useState([]);
  const handleDrag = ({ props: { type } }) => (elementRef.current = type);

  const handleDrop = (e) => {
    setFormContent([
      ...formContent,
      {
        id: v4(),
        type: elementRef.current,
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
        <FormLayoutBuilder
          onDragLeave={(e) => handleDrop({ e, eventType: "LEAVE" })}
        ></FormLayoutBuilder>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MkButton
            onClick={toggleModal}
            pIcon={<BiDownload size={16} />}
            variant="primary"
            rounded
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
        </ModalHeader>
      </Modal>
    </AppContainer>
  );
};

export default App;
