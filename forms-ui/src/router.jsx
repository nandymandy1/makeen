import { lazy } from "react";

const Home = lazy(() => import("@pages/Home"));
const About = lazy(() => import("@pages/About"));
const Contact = lazy(() => import("@pages/Contact"));
const Services = lazy(() => import("@pages/Services"));

const Profile = lazy(() => import("@/pages/Profile"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));

const Forms = lazy(() => import("@/pages/Forms"));
const FormBuilder = lazy(() => import("@/pages/Forms/FormBuilder"));
const FormPreview = lazy(() => import("@/pages/Forms/FormPreview"));
const FormValidator = lazy(() => import("@/pages/Forms/FormValidator"));

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
