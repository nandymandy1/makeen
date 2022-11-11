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
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { initApp } from "@store/Reducers/Auth/actions";
import Dashboard from "@layouts/Dashboard";
import DashboardPage from "@pages/Dashboard";
import Profile from "@pages/Dashboard/Profile";
import FormBuilder from "@pages/Dashboard/FormBuilder";

const AppWrapper = styled.div`
  width: 100vw;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initApp());
  }, []);

  return (
    <AppWrapper>
      <Navbar />
      <Routes>
        <Route path="" element={<Public />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact-us" element={<Contact />} />
        </Route>
        <Route path="auth" element={<Public />}>
          <Route index path="login" exact element={<Login />} />
          <Route path="register" exact element={<Register />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index exact element={<DashboardPage sidebar={<></>} />} />
          <Route path="profile" exact element={<Profile sidebar={<></>} />} />
          <Route exact path="form-builder" element={<FormBuilder />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
};

export default App;
