// import React from 'react'

import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { getAll } from "../../services/productService";
// import ActionTodo from "./ActionTodo";
import { Link } from "react-router-dom";

const Home = () => {
  const idUser = +localStorage.getItem("IdUser");
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const todos = await getAll("/todos");
      const todosUser = todos.filter((item) => item.userId === idUser);
      setData(todosUser);
    })();
  }, []);

  return (
    <>
      <div className="flex justify-end">
        {/* <ActionTodo setData={setData} /> */}
        <Link className="" to="/action_todo">
          add todo
        </Link>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>description</th>
              <th>Priority</th>
              <th>Status </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <TodoItem
                key={item.id}
                data={item}
                updateData={setData}
                datas={data}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
