import AppContainer, { AppContent, AppSidebar } from "@components/AppLayout";
import { Heading } from "@components/Typography";
import Widget, { WidgetContainer } from "@components/Widget";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 100%;
  padding-bottom: 3rem;
  background-color: #efefef;
`;

const App = () => {
  return (
    <AppContainer>
      <AppSidebar>
        <FormContainer></FormContainer>
        <WidgetContainer>
          <Heading style={{ alignSelf: "start", marginLeft: "60px" }}>
            Cell layout
          </Heading>
          <Widget onDrag={(e) => console.log(e)} title="Table" type="table" />
        </WidgetContainer>

        <WidgetContainer>
          <Heading style={{ alignSelf: "start", marginLeft: "60px" }}>
            Form Components
          </Heading>
          <Widget onDrag={(e) => console.log(e)} title="Input" type="input" />
          <Widget
            onDrag={(e) => console.log(e)}
            title="Checkbox"
            type="checkbox"
          />
          <Widget
            onDrag={(e) => console.log(e)}
            title="File Uploader"
            type="uploader"
          />
          <Widget onDrag={(e) => console.log(e)} title="Text" type="text" />
          <Widget
            onDrag={(e) => console.log(e)}
            title="Divider"
            type="divider"
          />
        </WidgetContainer>
      </AppSidebar>
      <AppContent>
        <div
          onDragLeave={(e) => console.log("DROP", e)}
          style={{
            height: 150,
            width: "60%",
            borderRadius: 5,
            border: "1px dashed #ccc",
          }}
        />
      </AppContent>
    </AppContainer>
  );
};

export default App;
