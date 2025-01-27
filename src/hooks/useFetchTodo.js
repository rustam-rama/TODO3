import { useState, useEffect } from "react";
import { get, ref } from "firebase/database";
import { db } from "../firebase";

export const useFetchTodo = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosRef = ref(db, "todos");
        const snapshot = await get(todosRef);
        
        if (snapshot.exists()) {
          const todosData = snapshot.val();
          const todosArray = Object.entries(todosData).map(([id, data]) => ({
            id,
            ...data,
          }));
          setTodos(todosArray);
        } else {
          setTodos([]);
        }
      } catch {
        setError("Ошибка при загрузке задач");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return { todos, isLoading, error, setTodos };
};
