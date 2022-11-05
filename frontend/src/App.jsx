import AppContainer, { AppContent, AppSidebar } from "@components/Layout";
import { Heading } from "@components/Typography";
import Widget, { WidgetContainer } from "@components/Widget";
import styled from "styled-components";

const FormListContainer = styled.div`
  width: 100%;
  padding-bottom: 3rem;
  background-color: #efefef;
`;

const FormLayout = styled.div`
  width: 100%;
`;

const FormItemContainer = styled.div`
  width: 60%;
  height: 100px;
  border-radius: 5px;
  border: 1px dashed #ccc;
`;

const App = () => {
  return (
    <AppContainer>
      <AppSidebar>
        <FormListContainer></FormListContainer>
        <WidgetContainer>
          <Heading style={{ alignSelf: "start", marginLeft: "60px" }}>
            Cell layout
          </Heading>
          <Widget title="Table" type="table" />
        </WidgetContainer>

        <WidgetContainer>
          <Heading style={{ alignSelf: "start", marginLeft: "60px" }}>
            Form Components
          </Heading>
          <Widget
            type="input"
            title="Input"
            onDrop={(e) => console.log("DROP", e)}
            onDragEnd={(e) => console.log("DRAG", e)}
          />

          <Widget title="Checkbox" type="checkbox" />
          <Widget title="File Uploader" type="uploader" />
          <Widget title="Text" type="text" />
          <Widget title="Divider" type="divider" />
        </WidgetContainer>
      </AppSidebar>
      <AppContent>
        <FormLayout>
          <FormItemContainer onDrop={(e) => console.log("DROP", e)} />
        </FormLayout>
      </AppContent>
    </AppContainer>
  );
};

export default App;
