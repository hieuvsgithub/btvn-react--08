// import React from 'react'
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { getAll } from "../../services/productService";
import { schemaLogin } from "../../schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
  const nav = useNavigate();
  const {
    register,
    // reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schemaLogin),
  });

  const onSubmit = (data) => {
    const checkUser = async () => {
      const datasUser = await getAll("/users");
      const accountExists = datasUser.find((item) => item.email === data.email);
      if (accountExists) {
        nav("/");
        localStorage.setItem("IdUser", accountExists.id);
      } else {
        confirm("Tài khoản không tồn tại !!");
      }
    };
    checkUser();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="w-1/4 flex-col px-5 py-10 mx-auto mt-16 border-solid border-2 border-slate-700 rounded-md"
      >
        <h2 className="text-center text-3xl font-semibold mb-8">Login</h2>
        <div className="block">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="block  w-full "
            placeholder="Name..."
            {...register("name", { required: true })}
          />
          {errors.name && <p>{errors.name?.message}</p>}
        </div>
        <div className="block mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="block  w-full"
            placeholder="email..."
            {...register("email", { required: true })}
          />
          {errors.email && <p>{errors.email?.message}</p>}
        </div>
        <div className="block mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="block w-full"
            placeholder="Password..."
            {...register("password", { required: true })}
          />
          {errors.password && <p>{errors.password?.message}</p>}
        </div>
        <div className="block mb-3">
          <NavLink className="text-sm font-medium" to="/register">
            Bạn chưa có tài khoản ?
          </NavLink>
        </div>
        <div className="  block mb-4">
          <button
            className="py-1 border-solid border font-medium border-slate-700 rounded-sm bg-sky-500 block w-3/4 text-center mx-auto"
            type="submit"
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
