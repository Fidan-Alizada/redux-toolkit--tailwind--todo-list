import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDone } from '../../features/todos/todosSlice';
import DoneIcon from '@mui/icons-material/Done';

const TodoList = () => {
  const todoList = useSelector((state) => state.todos.todoList);
  const activeTasksCount = useSelector((state) => state.todos.todoList.length);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия списка

  const handleToggleDone = (id) => {
    dispatch(toggleDone({ id }));
  };

  return (
    <div className="relative w-1/2 p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          To Do List <span className="badge bg-blue-500 text-white">{activeTasksCount}</span>
        </h2>
        <span className="absolute top-0 right-0 mr-4 mt-2 text-xl cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '▲' : '▼'}
        </span>
      </div>
      <ul className={`transition-all overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        {todoList.map((item) => (
          <li key={item.id} className="flex justify-between items-center bg-white p-4 mb-4 rounded-lg shadow">
            <span className="text-lg">{item.text}</span>
            <DoneIcon
              className="cursor-pointer text-green-500 hover:text-green-700"
              onClick={() => handleToggleDone(item.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;