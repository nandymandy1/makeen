import { Navigate, Outlet } from "react-router-dom";
import AppFooter from "@layouts/partials/Footer";
import styled from "styled-components";
import { useSelector } from "react-redux";

const PublicLayout = styled.div`
  flex: 1;
  min-height: 80vh;
  overflow-y: scroll;
`;

const Public = (props) => {
  // const { isAuth } = useSelector((state) => state.Auth);

  // if (isAuth) {
  //   return <Navigate to="/dashboard" />;
  // }

  console.log({ props });

  return (
    <PublicLayout>
      <div style={{ height: "100%", marginTop: 50 }}>
        <Outlet />
      </div>
      <AppFooter></AppFooter>
    </PublicLayout>
  );
};

export default Public;
