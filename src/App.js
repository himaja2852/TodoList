import React, { useState } from 'react';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Footer from './Footer';
import './App.css'; // Import App.css




function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo.trim()) {
      setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const renameTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        renameTodo={renameTodo}
      />
      <Footer />
    </div>
  );
}

export default App;