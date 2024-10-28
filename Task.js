import React from 'react';

function Task({ task, deleteTask, toggleComplete }) {
  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
      <button onClick={() => toggleComplete(task.id)}>Completar</button>
    </li>
  );
}

export default Task;

