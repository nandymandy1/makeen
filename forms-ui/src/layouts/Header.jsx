import { SiFormstack } from "react-icons/si";
import AppLink, { BrandLink, LinkButton } from "@components/AppLink";
import { Navbar } from "@components/Layouts";
import { useSelector } from "react-redux";

const Header = () => {
  const { isAuth } = useSelector((state) => state.Auth);

  return (
    <Navbar>
      <div>
        <BrandLink to="/">
          <SiFormstack size={35} />
          <h2>Formly</h2>
        </BrandLink>
      </div>
      <div>
        {!isAuth && (
          <>
            <AppLink nav={true} to="/">
              Home
            </AppLink>
            <AppLink nav={true} to="/about-us">
              About Us
            </AppLink>
            <AppLink nav={true} to="/services">
              Services
            </AppLink>
            <AppLink nav={true} to="/contact-us">
              Contact Us
            </AppLink>
            <AppLink nav={true} to="/auth/login">
              Login
            </AppLink>
            <AppLink nav={true} to="/auth/register">
              Register
            </AppLink>
          </>
        )}
        {!isAuth && (
          <>
            <AppLink nav={true} to="/dashboard">
              Dashboard
            </AppLink>
            <AppLink nav={true} to="/dashbord/forms">
              Forms
            </AppLink>
            <AppLink nav={true} to="/dashboard/profile">
              Profile
            </AppLink>
            <LinkButton>Logout</LinkButton>
          </>
        )}
      </div>
    </Navbar>
  );
};

export default Header;
