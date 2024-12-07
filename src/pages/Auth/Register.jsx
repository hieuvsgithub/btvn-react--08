// import React from 'react'
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { createNew, getAll } from "../../services/productService";
import { schemaRegister } from "../../schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const Register = () => {
  const nav = useNavigate();
  const {
    register,
    // reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schemaRegister),
  });

  const onSubmit = (data) => {
    const checkUser = async () => {
      const datasUser = await getAll("/users");
      const isUser = datasUser.find((item) => item.email === data.email);
      if (isUser) {
        confirm("Tài khoản đã tồn tại !!");
      } else {
        const newUser = await createNew("/users", data);
        console.log(newUser);
        nav("/login");
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
        <h2 className="text-center text-3xl font-semibold mb-8">Register</h2>
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
          <NavLink className="text-sm text-yellow-700 font-medium" to="/login">
            Bạn đã có tài khoản ?
          </NavLink>
        </div>
        <div className="  block mb-4">
          <button
            className="py-1 border-solid border font-medium border-slate-700 rounded-sm bg-green-600 block w-3/4 text-center mx-auto "
            type="submit"
          >
            Đăng kí
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
