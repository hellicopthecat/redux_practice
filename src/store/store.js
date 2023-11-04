// import {createStore} from "redux";
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

/* const ADD = "ADD";
const DELETE = "DELETE";

const addTodo = (text) => {
  return {
    type: ADD,
    text,
  };
};
const deleteTodo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        // case ADD:
        //   return [{text: action.text, id: Date.now()}, ...state];
        case addTodo.type:
          return [{text: action.payload, id: Date.now()}, ...state];
        // case DELETE:
        //   return state.filter((toDo) => toDo.id !== action.id);
        case deleteTodo.type:
          return state.filter((toDo) => toDo.id !== action.payload);
        default:
          return state;
      }
    }; */
/*     const addTodo = createAction("ADD");
    const deleteTodo = createAction("DELETE");
const reducer = createReducer([], {
  [addTodo]: (state, action) => {
    state.push({text: action.payload, id: Date.now()});
  },
  [deleteTodo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
}); */

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.unshift({text: action.payload, id: Date.now()});
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});
// const store = createStore(reducer);
const store = configureStore({reducer: toDos.reducer});
// export const actionCreators = {
//   addTodo,
//   deleteTodo,
// };
export const {add, remove} = toDos.actions;
export default store;
