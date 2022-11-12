import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { DashboardRoutes, FormsRoutes, PublicRoutes } from "./router";

const Auth = lazy(() => import("@layouts/Auth"));
const Public = lazy(() => import("@layouts/Public"));
const PrivateRoute = lazy(() => import("@utils/PrivateRoute"));

const App = () => (
  <Suspense fallback={<>Loading...</>}>
    <Routes>
      <Route path="/" element={<Public />}>
        {PublicRoutes.map((route) => (
          <Route {...route} />
        ))}
      </Route>
      <Route path="" element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Auth />}>
          {DashboardRoutes.map((route) => (
            <Route {...route} />
          ))}
        </Route>
        <Route path="/forms" element={<Auth />}>
          {FormsRoutes.map((route) => (
            <Route {...route} />
          ))}
        </Route>
      </Route>
    </Routes>
  </Suspense>
);

export default App;
