/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { removeById, updateById } from "../../services/productService";

// import React from 'react'
const TodoItem = ({ data, updateData, datas, status, setStatus }) => {
  async function deleteTodo(id) {
    const result = confirm("ban co muon xoa sp nay ko");
    if (result) {
      try {
        const res = await removeById("/todos", id);
        if (res.status === 200) {
          updateData(datas.filter((data) => data.id !== data.id));
          setStatus(!status);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function handleChangeStatus(id) {
    try {
      const newData = datas.find((item) => {
        if (item.id === id) {
          item.status = !item.status;
          return item;
        }
      });
      const res = await updateById("/todos", id, newData);
      if (res) setStatus(!status);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <tr key={data.id}>
      <td>{data.id}</td>
      <td>{data.title}</td>
      <td>{data.description}</td>
      <td>{data.priority}</td>
      <td>
        <button
          className="border-2 border-amber-500 ml-3"
          onClick={() => handleChangeStatus(data.id)}
        >
          {data.status ? "Done" : "Doing"}
        </button>
      </td>
      <td>
        <button
          className="border-2 border-amber-500 ml-3"
          onClick={() => deleteTodo(data.id)}
        >
          delete
        </button>
        <Link
          className="border-2 border-amber-500 ml-3"
          to={`/action_todo/update/${data.id}`}
        >
          update
        </Link>
      </td>
    </tr>
  );
};

export default TodoItem;
