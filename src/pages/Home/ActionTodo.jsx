// import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createNew, getById, updateById } from "../../services/productService";
import { schemaAddTodo } from "../../schemas/addTodoSchema";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ActionTodo = (setData) => {
  const { id } = useParams();
  const [todoOld, setTodoOld] = useState();
  const nav = useNavigate();
  const idUser = +localStorage.getItem("IdUser");
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schemaAddTodo),
  });

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const todo = await getById("/todos", id);
          setTodoOld(todo);
        } catch (error) {
          console.error(error);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const onSubmit = (data) => {
    const checkUser = async () => {
      if (id) {
        const todoUpdate = await updateById("/todos", id, data);
      } else {
        const todo = await { userId: idUser, status: false, ...data };

        const authAddTodo = confirm(`Thêm Todo ${todo.title}`);
        if (authAddTodo) {
          const todoNew = await createNew("/todos", todo);
          nav("/");
          setData();
          reset();
        }
      }
    };
    checkUser();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="w-1/2 flex-col px-5 py-10 mx-auto mt-16 border-solid border-2 border-slate-700 rounded-md"
      >
        <h2 className="text-center text-2xl font-semibold mb-8">
          Thêm sản phẩm mới
        </h2>
        <div className="block">
          <label htmlFor="">Title</label>
          <input
            type="text"
            className="block w-full border-solid border  border-slate-700"
            {...register("title", { required: true })}
          />
          {errors.title && <p>{errors.title?.message}</p>}
        </div>
        <div className="block">
          <label htmlFor="">description</label>
          <input
            type="text"
            className="block w-full border-solid border  border-slate-700"
            {...register("description", { required: true })}
          />
          {errors.description && <p>{errors.description?.message}</p>}
        </div>
        <div className="block">
          <label htmlFor="">priority</label>
          <select
            name="priority"
            id="priority"
            className="block w-full border-solid border  border-slate-700"
            {...register("priority", { required: true })}
          >
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
          {errors.priority && <p>{errors.priority?.message}</p>}
        </div>
        <div className="block mb-4 mt-6">
          <button
            className="py-1 border-solid border font-medium border-slate-700 rounded-sm bg-sky-500 block w-3/4 text-center mx-auto"
            type="submit"
          >
            thêm
          </button>
        </div>
      </form>
    </>
  );
};

export default ActionTodo;
