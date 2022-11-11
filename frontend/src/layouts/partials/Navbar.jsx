import AppLink, { BrandLink } from "@components/AppLink/AppLink";
import { SiFormstack } from "react-icons/si";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { LinkButton } from "@components/AppLink/AppLink";
import { logoutUser } from "@store/Reducers/Auth/actions";

const AppNavbar = styled.div`
  top: 0;
  height: 65px;
  width: 100vw;
  display: flex;
  position: fixed;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.1);
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.Auth);
  const handleLogout = () => dispatch(logoutUser());

  return (
    <AppNavbar>
      <BrandLink to="/">
        <SiFormstack size={35} color="#047aff" /> <h2>Formly.</h2>
      </BrandLink>
      <div style={{ marginRight: 20 }}>
        {!isAuth && (
          <>
            <AppLink nav to="/">
              Home
            </AppLink>
            <AppLink nav to="/services">
              Services
            </AppLink>
            <AppLink nav to="/about-us">
              About Us
            </AppLink>
            <AppLink nav to="/contact-us">
              Contact Us
            </AppLink>
            <AppLink nav to="/auth/login">
              Login
            </AppLink>
            <AppLink nav to="/auth/register">
              Register
            </AppLink>
          </>
        )}

        {isAuth && (
          <>
            <AppLink nav to="/dashboard">
              Dashboard
            </AppLink>
            <AppLink nav to="/dashboard/profile">
              Profile
            </AppLink>
            <LinkButton nav onClick={handleLogout}>
              Logout
            </LinkButton>
          </>
        )}
      </div>
    </AppNavbar>
  );
};

export default Navbar;
