import { ref, push } from "firebase/database";
import { db } from "../firebase";

export const useAddTodo = (setTodos) => {
  const addTodo = async (title) => {
    const todosRef = ref(db, 'todos');
    const newTodo = { title, completed: false };
    const { key } = await push(todosRef, newTodo);
    setTodos(prev => [...prev, { id: key, ...newTodo }]);
  };

  return { addTodo };
};
