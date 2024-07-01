import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todoList: [],
    doneList: [],
  },
  reducers: {
    addItemToTodoList: (state, action) => {
      state.todoList.push(action.payload);
    },
    toggleDone: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.todoList.findIndex(todo => todo.id === id);
      if (itemIndex !== -1) {
        const item = state.todoList[itemIndex];
        state.doneList.push(item);
        state.todoList.splice(itemIndex, 1);
      }
    },
    removeItemFromDoneList: (state, action) => {
      const idToRemove = action.payload;
      state.doneList = state.doneList.filter(done => done.id !== idToRemove);
    },
  },
});

export const { addItemToTodoList, toggleDone, removeItemFromDoneList } = todoSlice.actions;

export default todoSlice.reducer;