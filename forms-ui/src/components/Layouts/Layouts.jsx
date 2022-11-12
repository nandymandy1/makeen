import styled from "styled-components";

export const DashboardLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 0.8fr 3fr;
  grid-template-rows: 1.8fr 20fr 0fr;
  grid-template-areas:
    "navbar  navbar"
    "sidebar content";

  @media (max-width: 500px) {
    .wrapper {
      grid-template-columns: 4fr;
      grid-template-areas:
        "navbar"
        "content"
        "sidebar"
        "footer";
    }
  }
`;

export const PublicLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 1.8fr 20fr 1fr;
  grid-template-areas:
    "navbar  navbar"
    "content content"
    "footer footer";
`;
