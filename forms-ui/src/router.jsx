import { lazy } from "react";

const Home = lazy(() => import("@pages/Home"));
const Register = lazy(() => import("@pages/Auth/Register"));
const Login = lazy(() => import("@pages/Auth/Login"));
const About = lazy(() => import("@pages/About"));
const Contact = lazy(() => import("@pages/Contact"));
const Services = lazy(() => import("@pages/Services"));

const Dashboard = lazy(() => import("@pages/Dashboard"));
const Profile = lazy(() => import("@pages/Dashboard/Profile"));
const Forms = lazy(() => import("@pages/Dashboard/Forms"));
const FormBuilder = lazy(() => import("@pages/Dashboard/Forms/FormBuilder"));
const FormPreview = lazy(() => import("@pages/Dashboard/Forms/FormPreview"));
const FormValidator = lazy(() =>
  import("@pages/Dashboard/Forms/FormValidator")
);

export const PublicRoutes = [
  {
    key: "home",
    index: true,
    element: <Home />,
  },
  {
    key: "about-us",
    path: "about-us",
    element: <About />,
  },
  {
    key: "services",
    path: "services",
    element: <Services />,
  },
  {
    key: "contact-us",
    path: "contact-us",
    element: <Contact />,
  },
  {
    key: "auth/login",
    path: "auth/login",
    element: <Login />,
  },
  {
    key: "auth/register",
    path: "auth/register",
    element: <Register />,
  },
];

export const DashboardRoutes = [
  {
    index: true,
    key: "dashboard",
    element: <Dashboard />,
  },
  {
    key: "profile",
    path: "profile",
    element: <Profile />,
  },
];

export const FormsRoutes = [
  {
    index: true,
    key: "forms",
    element: <Forms />,
  },
  {
    key: "builder",
    path: "builder",
    element: <FormBuilder />,
  },
  {
    key: "preview",
    path: "preview",
    element: <FormPreview />,
  },
  {
    key: "validator",
    path: "validator",
    element: <FormValidator />,
  },
];
