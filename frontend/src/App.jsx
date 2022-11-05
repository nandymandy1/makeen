import AppContainer, { AppContent, AppSidebar } from "@components/AppLayout";
import { Heading } from "@components/Typography";
import Widget, { WidgetContainer } from "@components/Widget";
import styled from "styled-components";
import { useRef, useState } from "react";
import { v4 } from "uuid";

const FormsContainer = styled.div`
  width: 100%;
  padding-bottom: 3rem;
  background-color: #efefef;
`;

const FormLayout = styled.div`
  width: 100%;
  max-height: 85%;
  min-height: 85%;
  overflow-y: scroll;
  padding-bottom: 3rem;
  background-color: red;
`;

const App = () => {
  const elementRef = useRef(null);
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
        <FormsContainer></FormsContainer>
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
          <Widget onDrag={handleDrag} title="Input" type="input" />
          <Widget onDrag={handleDrag} title="Checkbox" type="checkbox" />
          <Widget onDrag={handleDrag} title="File Uploader" type="uploader" />
          <Widget onDrag={handleDrag} title="Text" type="text" />
          <Widget onDrag={handleDrag} title="Divider" type="divider" />
        </WidgetContainer>
      </AppSidebar>
      <AppContent>
        <Heading
          type="h3"
          style={{ textAlign: "center", marginTop: -10, color: "#D8D8D8" }}
        >
          Drop & Create
        </Heading>
        <FormLayout
          onDragLeave={(e) => handleDrop({ e, eventType: "LEAVE" })}
        ></FormLayout>
      </AppContent>
    </AppContainer>
  );
};

export default App;
