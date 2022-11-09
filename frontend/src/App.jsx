import Navbar from "@layouts/partials/Navbar";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Home from "@pages/Public/Home";
import Public from "@layouts/Public";
import About from "@pages/Public/About";
import Services from "@pages/Public/Services";
import Contact from "@pages/Public/Contact";
import Login from "@pages/Auth/Login";
import Register from "@pages/Auth/Register";

const AppWrapper = styled.div`
  width: 100vw;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

const App = () => {
  return (
    <AppWrapper>
      <Navbar />
      <Routes>
        <Route path="" element={<Public />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<Contact />} />
        </Route>
        <Route path="auth" element={<Public />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
};

export default App;
