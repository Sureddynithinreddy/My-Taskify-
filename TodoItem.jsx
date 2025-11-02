import React from 'react'

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="todo-item">
      <span
        className={`todo-text ${todo.completed ? 'completed' : ''}`}
      >
        {todo.text}
      </span>

      <div className="btn-group">
        <button
          className="done-btn"
          onClick={() => toggleTodo(todo.id)}
        >
          Done
        </button>
        <button
          className="delete-btn"
          onClick={() => deleteTodo(todo.id)}
        >
          ❌
        </button>
      </div>
    </li>
  )
}

export default TodoItem
