import { useEffect } from "react";
import { createContext } from "react";
import { getAll } from "../services/productService";
import { useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    (async () => {
      const datas = await getAll("/todos");
      setTodos(datas);
    })();

    return () => {};
  }, []);

  return <TodoContext.Provider value={todos}>{children}</TodoContext.Provider>;
};
export default TodoProvider;
