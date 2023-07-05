import React from 'react'
import { useDispatch } from 'react-redux';
import { deletTodo, toogleTodoCompleted } from 'store/todoSlice';


const TodoItem = ({id, text, completed}) => {
const dispatch=useDispatch();


  return (
    <li key={id}>
    <input type="checkbox" name='' id={id} checked={ completed} onChange={()=>dispatch(toogleTodoCompleted({id}))} />
    <span>{ text}</span>
    <button style={{background: "red"}}  onClick={()=>dispatch(deletTodo( {id}))}>видалити запис</button>

    </li>
  )
}

export default TodoItem

