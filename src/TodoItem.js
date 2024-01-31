// import React, { useState } from 'react';

// function TodoItem({ todo, deleteTodo, renameTodo }) {
//   const [isEditing, setEditing] = useState(false);
//   const [newText, setNewText] = useState(todo.text);

//   const handleRename = () => {
//     renameTodo(todo.id, newText);
//     setEditing(false);
//   };

//   return (
//     <li>
//       {isEditing ? (
//         <>
//           <input
//             type="text"
//             value={newText}
//             onChange={(e) => setNewText(e.target.value)}
//             onBlur={handleRename} // Save on blur (when focus is lost)
//             onKeyDown={(e) => {
//               if (e.key === 'Enter') handleRename(); // Save on Enter key press
//             }}
//           />
//         </>
//       ) : (
//         <>
//           <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//             {todo.text}
//           </span>
//           <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//           <button onClick={() => setEditing(true)}>Rename</button>
//         </>
//       )}
//     </li>
//   );
// }

// export default TodoItem;
import React, { useState } from 'react';

function TodoItem({ todo, deleteTodo, renameTodo }) {
  const [isEditing, setEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleRename = () => {
    renameTodo(todo.id, newText);
    setEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onBlur={handleRename} // Save on blur (when focus is lost)
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleRename(); // Save on Enter key press
            }}
          />
        </>
      ) : (
        <>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button
            onClick={() => setEditing(true)}
            style={{
              background: 'linear-gradient(to right, #8BC34A, #4CAF50)',
              color: 'white',
              padding: '5px 10px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginLeft: '5px',
            }}
          >
            Rename
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
