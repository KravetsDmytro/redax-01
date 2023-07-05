import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todoSlice =createSlice({
name:"todos",
initialState:{
todos:[],
},

reducers:{
addTodo(state, action) {
state.todos.push(
  {id: nanoid(),
  text: action.payload.text,
  completed: false,

})
},
deletTodo(state, action ) {
  state.todos=state.todos.filter(todo => todo.id !==action.payload.id)
  },


toogleTodoCompleted(state, action) {
const togleTodo=state.todos.find(todo=> todo.id ===action.payload.id)
togleTodo.completed=!togleTodo.completed;
},

},

}
);

export const {addTodo, deletTodo, toogleTodoCompleted }=todoSlice.actions;

export default todoSlice.reducer;
