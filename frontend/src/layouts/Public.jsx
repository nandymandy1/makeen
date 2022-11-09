import { Outlet } from "react-router-dom";
import AppFooter from "@layouts/partials/Footer";
import styled from "styled-components";

const PublicLayout = styled.div`
  flex: 1;
  min-height: 80vh;
  overflow-y: scroll;
`;

const Public = () => {
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
