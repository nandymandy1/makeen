import AppContainer, { AppContent, AppSidebar } from "@components/AppLayout";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Widget, { WidgetContainer } from "@components/Widget";

const Widgets = [
  { title: "Input", type: "input" },
  { title: "Checkbox", type: "checkbox" },
  { title: "File Uploader", type: "uploader" },
  { title: "Text", type: "text" },
  { title: "Divider", type: "divider" },
];

const FormsSidebarContent = ({ forms = [] }) => {
  return (
    <>
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
    </>
  );
};

const MainSidebarContents = () => {
  <>
    <p className="text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempora
      repellendus ex quae minus voluptates, hic totam sunt blanditiis ut sint
      sapiente natus, a nulla. Adipisci dolorum dolores veniam ducimus iusto
      delectus? Delectus corporis molestiae voluptatum. Assumenda minima ducimus
      repudiandae alias porro asperiores, enim ab! Quod nobis fuga, unde nihil
      nemo ipsa. Labore qui dolor veritatis, architecto sit velit aliquam,
      repudiandae laudantium quasi tempora suscipit ea consequuntur modi
      corporis porro aspernatur libero deserunt quas explicabo voluptatibus
      laborum. Rerum temporibus fuga, sunt quibusdam unde corporis voluptatum
      nisi nihil, praesentium perspiciatis nam natus ratione soluta aspernatur
      dicta, recusandae repudiandae veniam est? Asperiores?
    </p>
  </>;
};

const Dashboard = () => {
  const { pathname } = useLocation();
  const isFormLayout = pathname === "/form-builder";
  const { isAuth } = useSelector((state) => state.Auth);

  if (!isAuth) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <AppContainer>
      <AppSidebar>
        {isFormLayout ? <FormsSidebarContent /> : <MainSidebarContents />}
      </AppSidebar>
      <AppContent>
        <Outlet />
      </AppContent>
    </AppContainer>
  );
};

export default Dashboard;
