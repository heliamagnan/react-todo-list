import React from 'react';

const TodoList = ({ todos, completeTodo, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {/* Utilise une checkbox pour marquer la tâche comme terminée */}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(index)}
          />
          <span class="txt_todo" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button class="cross" onClick={() => removeTodo(index)}>x</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
