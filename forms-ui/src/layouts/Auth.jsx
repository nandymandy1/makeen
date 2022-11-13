import { Content, DashboardLayout, Sidebar } from "@components/Layouts";
import Header from "@layouts/Header";
import { Outlet } from "react-router-dom";

const Auth = ({ sidebar: LayoutSidebar }) => {
  console.log({ LayoutSidebar });

  return (
    <DashboardLayout>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Sidebar>
        <LayoutSidebar />
      </Sidebar>
    </DashboardLayout>
  );
};

export default Auth;
