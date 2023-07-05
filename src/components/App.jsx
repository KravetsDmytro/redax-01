import { useState } from "react";
import { useDispatch } from "react-redux";

// import { nanoid } from 'nanoid'
import TodoList from "./todoList/TodoList";
import InputForm from "./InputForm/InputForm";
import { addTodo } from "store/todoSlice";

export const App = () => {

const [text, setText]=useState('');
 const dispatch=useDispatch();

const addTask= () =>{dispatch(addTodo({text}))
setText('');
};

return (
    <div
      style={{
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
<InputForm  text={text} handleInput={setText} handleSubmit={addTask} />

<TodoList/>





   </div>
  );
};
