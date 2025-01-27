import { ref, remove } from "firebase/database";
import { db } from "../firebase";

export const useDeleteTodo = (setTodos) => {
  const deleteTodo = async (id) => {
    const todoRef = ref(db, `todos/${id}`);
    await remove(todoRef);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return { deleteTodo };
};
