import React from 'react';
import TodoInput from './companents/TodoInput/TodoInput.jsx';
import TodoList from './companents/TodoList/TodoList.jsx';
import DoneList from './companents/DoneList/DoneList.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-center text-2xl font-bold mb-4">TO DO APP REDUX TOOLKIT</h1>
      <TodoInput />
      <div className="flex justify-around">
        <TodoList />
        <DoneList />
      </div>
    </div>
  );
};

export default App;
