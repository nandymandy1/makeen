import { RouterProvider } from "react-router-dom";
import styled from "styled-components";
import router from "./Router";

const AppWrapper = styled.div`
  width: 100vw;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

const App = () => (
  <AppWrapper>
    <RouterProvider router={router} />
  </AppWrapper>
);

export default App;
