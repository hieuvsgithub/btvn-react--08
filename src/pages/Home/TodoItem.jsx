import { Link } from "react-router-dom";
import { removeById } from "../../services/productService";

// import React from 'react'
const TodoItem = (data, updateData, datas) => {
  async function deleteTodo(id) {
    const result = confirm("ban co muon xoa sp nay ko");
    if (result) {
      try {
        const res = await removeById("/todos", id);
        if (res.status === 200) {
          // updateData(datas.filter((data) => data.id !== data.id));
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <tr key={data.data.id}>
      <td>{data.data.id}</td>
      <td>{data.data.title}</td>
      <td>{data.data.description}</td>
      <td>{data.data.priority}</td>
      <td>
        <label>
          {data.data.status ? "Done" : "Doing"}
          <input type="checkbox" />
        </label>
      </td>
      <td>
        <button onClick={() => deleteTodo(data.data.id)}>delete</button>
        <Link to={`/action_todo/update/${data.data.id}`}>update</Link>
      </td>
    </tr>
  );
};

export default TodoItem;
