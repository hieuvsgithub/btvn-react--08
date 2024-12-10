// import React from 'react'

import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { getAll } from "../../services/productService";
// import ActionTodo from "./ActionTodo";
import { Link } from "react-router-dom";

const Home = () => {
  const idUser = +localStorage.getItem("IdUser");
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const [todoDoing, setTodoDoing] = useState([]);

  useEffect(() => {
    (async () => {
      console.log(1);
      const todos = await getAll("/todos");
      const todosUser = todos.filter((item) => item.userId === idUser);
      setData(todosUser);
      const todoDoing = todosUser.filter((item) => item.status === false);
      setTodoDoing(todoDoing);
    })();
  }, [status]);

  return (
    <>
      <div className="flex justify-end">
        {/* <ActionTodo setData={setData} /> */}
        <Link className="border-2 border-amber-500 ml-3" to="/action_todo">
          add todo
        </Link>
        <Link className="border-2 border-amber-500 ml-3" to="/login">
          login
        </Link>
        <Link className="border-2 border-amber-500 ml-3" to="/register">
          register
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
                status={status}
                setStatus={setStatus}
              />
            ))}
          </tbody>
        </table>
        <div>Số công việc chưa hoàn thành {todoDoing.length}</div>
      </div>
    </>
  );
};

export default Home;
