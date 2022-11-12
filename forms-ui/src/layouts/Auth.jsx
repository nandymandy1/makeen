import { Content, DashboardLayout, Sidebar } from "@components/Layouts";
import Header from "@layouts/Header";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <DashboardLayout>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Sidebar />
    </DashboardLayout>
  );
};

export default Auth;
