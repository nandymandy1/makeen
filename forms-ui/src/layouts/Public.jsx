import { Content, Footer, PublicLayout } from "@components/Layouts";
import Header from "@layouts/Header";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Public = () => {
  const { isAuth } = useSelector((state) => state.Auth);

  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }

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
