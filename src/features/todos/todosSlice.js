import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todoList: [],
    doneList: []
  },
  reducers: {
    addItemToTodoList: (state, action) => {
      state.todoList.push(action.payload);
    },
    toggleDone: (state, action) => {
      const todoIndex = state.todoList.findIndex(todo => todo.id === action.payload.id);
      const doneIndex = state.doneList.findIndex(done => done.id === action.payload.id);

      if (todoIndex >= 0) {
        const [removed] = state.todoList.splice(todoIndex, 1);
        state.doneList.push(removed);
      } else if (doneIndex >= 0) {
        const [removed] = state.doneList.splice(doneIndex, 1);
        state.todoList.push(removed);
      }
    },
    removeItemFromDoneList: (state, action) => {
      state.doneList = state.doneList.filter(item => item.id !== action.payload);
    }
  }
});

export const { addItemToTodoList, toggleDone, removeItemFromDoneList } = todosSlice.actions;

export default todosSlice.reducer;
