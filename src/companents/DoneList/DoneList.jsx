import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromDoneList } from '../../features/todos/todosSlice';
import DeleteIcon from '@mui/icons-material/Delete';


const DoneList = () => {
  const doneList = useSelector((state) => state.todos.doneList);
  const doneTasksCount = useSelector((state) => state.todos.doneList.length);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false); 

  const handleDelete = (id) => {
    dispatch(removeItemFromDoneList(id));
  };

  return (
    <div className="relative w-1/2 p-4 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          Done List <span className="badge bg-orange-500 text-white px-2 py-1 rounded-full">{doneTasksCount}</span>
        </h2>
        <span className="absolute top-0 right-0 mr-4 mt-2 text-xl cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '▲' : '▼'}
        </span>
      </div>
      <ul className={`transition-all overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        {doneList.map((item) => (
          <li key={item.id} className="flex justify-between items-center bg-white p-4 mb-4 rounded-lg shadow hover:shadow-md transition duration-300">
            <span className="text-lg text-gray-800">{item.text}</span>
            <DeleteIcon
              className="cursor-pointer text-red-500 hover:text-red-700"
              onClick={() => handleDelete(item.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoneList;