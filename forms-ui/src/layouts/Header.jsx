import AppLink, { BrandLink, LinkButton } from "@components/AppLink";
import { Navbar } from "@components/Layouts";
import { logoutUser } from "@store/Reducers/Auth/actions";
import { SiFormstack } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";

const PublicLinks = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about-us" },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
  {
    title: "Login",
    path: "/auth/login",
  },
  {
    title: "Register",
    path: "/auth/register",
  },
];

const AuthLinks = [
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "Forms",
    path: "/forms",
  },
  {
    title: "Profile",
    path: "/dashboard/profile",
  },
];

const Header = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.Auth);

  const handleLogoutClick = () => dispatch(logoutUser());

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
            {PublicLinks.map(({ title, path }) => (
              <AppLink nav={true} key={title} to={path}>
                {title}
              </AppLink>
            ))}
          </>
        )}

        {isAuth && (
          <>
            {AuthLinks.map(({ title, path }) => (
              <AppLink nav={true} key={title} to={path}>
                {title}
              </AppLink>
            ))}
            <LinkButton onClick={handleLogoutClick}>Logout</LinkButton>
          </>
        )}
      </div>
    </Navbar>
  );
};

export default Header;
