import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToTodoList } from '../../features/todos/todosSlice'; 

const TodoInput = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      dispatch(addItemToTodoList({
        text: todo,
        id: Date.now(),
      }));
      setTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-4">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="border rounded px-2 py-1 w-full max-w-lg"
        placeholder="Add Todo"
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">Send</button>
    </form>
  );
};

export default TodoInput;