import React from 'react'
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import TodoItem from 'components/todoItem/TodoItem';

const TodoList = ({ deletTodo, toogleTodoCompleted }) => {
const todos=useSelector(state=>state.todos.todos);

  return (
    <ul>{todos.map(todo => <TodoItem key={todo.id}
toogleTodoCompleted={toogleTodoCompleted}
deletTodo={deletTodo}
      {...todo}/>
      )}</ul>
  )
}

export default TodoList
