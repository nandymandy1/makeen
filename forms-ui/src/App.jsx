import { initApp } from "@store/Reducers/Auth/actions";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { DashboardRoutes, FormsRoutes, PublicRoutes } from "./router";

const Auth = lazy(() => import("@layouts/Auth"));
const Public = lazy(() => import("@layouts/Public"));
const PrivateRoute = lazy(() => import("@utils/PrivateRoute"));

const FormSidebar = lazy(() => import("@layouts/DashboardSidebars/Forms"));
const DashboardSidebar = lazy(() =>
  import("@layouts/DashboardSidebars/Dashboard")
);

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

/**
 * TODO:
 * Add Field Controller
 * Add Toaster and Loading
 * Remove field from fromContents
 */
