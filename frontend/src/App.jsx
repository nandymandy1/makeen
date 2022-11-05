import { BiMove } from "react-icons/bi";
import styled from "styled-components";
import Widget, { WidgetContainer } from "@components/Widget";
import { Heading } from "@components/Typography";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const AppSidebar = styled.div`
  width: 400px;
  height: 100vh;
  background-color: #047aff;
`;

const AppContent = styled.div`
  padding: 15px 25px;
  max-height: 100vh !important;
  overflow-y: scroll;
  background-color: #fff;
  width: calc(100vw - 400px);
`;

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
          <Widget title="Table" type="table" />
        </WidgetContainer>

        <WidgetContainer>
          <Heading style={{ alignSelf: "start", marginLeft: "60px" }}>
            Form Components
          </Heading>
          <Widget title="Input" type="input" />
          <Widget title="Checkbox" type="checkbox" />
          <Widget title="File Uploader" type="uploader" />
          <Widget title="Text" type="text" />
          <Widget title="Divider" type="divider" />
        </WidgetContainer>
      </AppSidebar>
      <AppContent>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem,
          cupiditate corporis, ullam libero blanditiis, nobis ut tenetur
          voluptatibus modi aliquam earum obcaecati qui ipsum dicta sapiente
          quaerat? Harum tempora tenetur doloremque. Dolor, quis similique!
          Explicabo necessitatibus nihil eligendi mollitia corporis, est impedit
          ea? Illum expedita, minima commodi rerum officiis distinctio. Ipsa,
          ullam aut soluta provident quos nobis beatae explicabo maxime
          consequatur quis autem earum quas id doloribus sapiente assumenda sed
          ratione exercitationem sunt neque nam praesentium quibusdam
          accusantium quia. Debitis maxime ad in sit quas nam nisi, nulla,
          tempora magnam voluptates necessitatibus nesciunt vero. Maiores
          ducimus sit facere officiis minus?
        </p>
      </AppContent>
    </AppContainer>
  );
};

export default App;
