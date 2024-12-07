import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Profile from "../pages/Auth/Profile";
import AuthMiddlewares from "../middlewares/AuthMiddlewares";

export const privateRoutes = (
  <>
    <Route element={<DefaultLayout />}>
      <Route element={<AuthMiddlewares />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Route>
  </>
);
