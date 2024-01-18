// Importe React et le fichier de style App.css
import React, { useState } from 'react';
import './App.css';

// Importe les composants TodoForm et TodoList
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// Fonction principale App
function App() {
  // Utilise le hook useState pour créer un état local 'todos' et une fonction 'setTodos' pour le mettre à jour
  const [todos, setTodos] = useState([]);

  // Fonction pour ajouter une tâche à la liste des todos
  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  // Fonction pour marquer une tâche comme terminée
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Fonction pour supprimer une tâche de la liste des todos
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Rendu de l'application avec les composants TodoForm et TodoList
  return (
    <div className="App">
      <h1>Todo List</h1>
      <p>Hélia de <a href="https://stratoweb.tech" target="_blank">Stratoweb</a></p>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  );
}

// Exporte le composant App
export default App;
