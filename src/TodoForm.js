import React, { useState } from 'react';
import { addTodo } from './App';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(value);
    setValue('');
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button
        type="submit"
        style={{
          background: 'linear-gradient(to right, #a8e063, #56ab2f)',
          color: 'white',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginLeft: '5px',
        }}
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
