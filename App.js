import React, { useState } from 'react';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // agregar una nueva tarea
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  //eliminar una tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // marcar una tarea como completada
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  //  filtrar las tareas
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Filtrar las tareas según el filtro actual
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'pending') {
      return !task.completed;
    }
    return true;
  });

  return (
    <div>   

      <h1>To-Do List</h1>
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
      {/* Aquí irían los botones para filtrar */}
    </div>
  );
}

export default App;
