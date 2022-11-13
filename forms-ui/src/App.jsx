import { initApp } from "@store/Reducers/Auth/actions";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { DashboardRoutes, FormsRoutes, PublicRoutes } from "./router";

const Auth = lazy(() => import("@layouts/Auth"));
const Public = lazy(() => import("@layouts/Public"));
const PrivateRoute = lazy(() => import("@utils/PrivateRoute"));

// Sidebar Imports
const DashboardSidebar = lazy(() =>
  import("@layouts/DashboardSidebars/Dashboard")
);
const FormSidebar = lazy(() => import("@layouts/DashboardSidebars/Forms"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initApp());
  }, []);

  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<Public hello="Awesome" />}>
          {PublicRoutes.map((route) => (
            <Route {...route} />
          ))}
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route
            path="/dashboard"
            element={<Auth sidebar={DashboardSidebar} />}
          >
            {DashboardRoutes.map((route) => (
              <Route {...route} />
            ))}
          </Route>

          <Route path="/forms" element={<Auth sidebar={FormSidebar} />}>
            {FormsRoutes.map((route) => (
              <Route {...route} />
            ))}
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;