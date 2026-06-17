import { useState } from 'react';
import './App.css';

function App() {
  // State for the todo list and the input field
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Add a new todo
  const handleAddTodo = () => {
    if (inputValue.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  // Add todo when Enter key is pressed
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  // Toggle completed status
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <div className="container">
        <h1>📝 My Todo App</h1>

        <div className="input-group">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter a new task..."
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>

        {todos.length === 0 ? (
          <p className="empty-message">No tasks yet. Add one above!</p>
        ) : (
          <ul className="todo-list">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`todo-item ${todo.completed ? 'completed' : ''}`}
              >
                <span
                  onClick={() => toggleTodo(todo.id)}
                  className="todo-text"
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}

        <p className="status">
          Total tasks: {todos.length} | Completed:{' '}
          {todos.filter((todo) => todo.completed).length}
        </p>
      </div>
    </div>
  );
}

export default App;
