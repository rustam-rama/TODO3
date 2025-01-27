import { useState } from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, onUpdate, onDelete, onToggleComplete }) => {
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  if (!todo?.id || !todo?.title) return null;

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <div 
          className={`todo-checkbox ${todo.completed ? 'completed' : ''}`}
          onClick={() => onToggleComplete(todo.id, todo.completed)}
        />
        {editingId === todo.id ? (
          <div className="todo-edit">
            <input
              type="text"
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)}
              className="todo-input"
            />
            <button
              onClick={() => {
                onUpdate(todo.id, { title: editingText });
                setEditingId(null);
              }}
              className="todo-button"
            >
              Сохранить
            </button>
            <button 
              onClick={() => setEditingId(null)} 
              className="todo-button"
            >
              Отмена
            </button>
          </div>
        ) : (
          <>
            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
              {todo.title}
            </span>
            <div className="todo-actions">
              <button
                onClick={() => {
                  setEditingId(todo.id);
                  setEditingText(todo.title);
                }}
                className="todo-button"
              >
                Редактировать
              </button>
              <button
                onClick={() => onDelete(todo.id)}
                className="todo-button delete"
              >
                Удалить
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
};

export default TodoItem;
