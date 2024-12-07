import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import ProductDetail from "../pages/Products/ProductDetail";
import { Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import NotFound from "../pages/NotFound/NotFound";
import ActionTodo from "../pages/Home/ActionTodo";
// import GuestMiddlewares from "../middlewares/GuestMiddlewares";

export const publicRoutes = (
  <>
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/action_todo" element={<ActionTodo />} />
      <Route path="/action_todo/update/:id" element={<ActionTodo />} />
      <Route path="/products">
        <Route path="" element={<Products />} />
        <Route path=":id" element={<ProductDetail />} />
      </Route>
    </Route>
    <Route element={<AuthLayout />}>
      {/* <Route element={<GuestMiddlewares />}> */}
      <Route path="login" element={<Login />} />
      {/* </Route> */}
      <Route path="register" element={<Register />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </>
);
