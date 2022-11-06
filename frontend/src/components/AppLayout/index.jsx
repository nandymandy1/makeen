import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const AppSidebar = styled.div`
  width: 400px;
  height: 100vh;
  background-color: #047aff;
`;

export const AppContent = styled.div`
  padding: 15px 25px;
  overflow-y: scroll;
  padding-bottom: 0px;
  background-color: #fff;
  width: calc(100vw - 400px);
  max-height: 100vh !important;
`;

export default AppContainer;
