import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, renameTodo }) {
  const listStyle = {
   
    listStyle: 'none', 
  };

  return (
    <ul style={listStyle}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          renameTodo={renameTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
