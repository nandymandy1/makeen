import { Content, Footer, PublicLayout } from "@components/Layouts";
import Header from "@layouts/Header";
import { Outlet } from "react-router-dom";

const Public = () => {
  return (
    <PublicLayout>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer></Footer>
    </PublicLayout>
  );
};

export default Public;
