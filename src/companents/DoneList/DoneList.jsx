import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromDoneList } from '../../features/todos/todosSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import { motion } from 'framer-motion';

const variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0 }
};

const itemVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -100 }
};

const DoneList = () => {
  const doneList = useSelector((state) => state.todos.doneList);
  const doneTasksCount = useSelector((state) => state.todos.doneList.length);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = (id) => {
    dispatch(removeItemFromDoneList(id));
  };

  return (
    <motion.div
      className="relative w-1/2 p-4 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 rounded-lg shadow-lg"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          Done List <span className="badge bg-orange-500 text-white px-2 py-1 rounded-full">{doneTasksCount}</span>
        </h2>
        <motion.span className="absolute top-0 right-0 mr-4 mt-2 text-xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '▲' : '▼'}
        </motion.span>
      </div>
      <motion.ul
        className="transition-all overflow-hidden"
        variants={variants}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {doneList.map((item) => (
          <motion.li key={item.id} className="flex justify-between items-center bg-white p-4 mb-4 rounded-lg shadow hover:shadow-md transition duration-300" variants={itemVariants}>
            <span className="text-lg text-gray-800">{item.text}</span>
            <DeleteIcon
              className="cursor-pointer text-red-500 hover:text-red-700"
              onClick={() => handleDelete(item.id)}
            />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default DoneList;
