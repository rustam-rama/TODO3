import { ref, update } from "firebase/database";
import { db } from "../firebase";

export const useUpdateTodo = (setTodos) => {
  const updateTodo = async (id, updates) => {
    const todoRef = ref(db, `todos/${id}`);
    await update(todoRef, updates);
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...updates } : todo))
    );
  };

  return { updateTodo };
};
