import React from 'react';
import closeIcon from "../images/close.svg"
import checkIcon from "../images/check.svg"
import {completeTodo, removeTodo} from "../redux/features/todo/todoSlice"
import {useDispatch} from "react-redux"

const Todo = ({content, completed, id}) => {
  const dispatch = useDispatch();

  const completeTodoHandler = () => {
    dispatch(completeTodo(id))
  }
  const removeTodoHandler = () => {
    dispatch(removeTodo(id))
  }

  return (
    <div className='todo_container' onClick={completeTodoHandler}>
      <div className={`circle ${completed ? "active" : ""}`}>
        <img src={checkIcon} className="svgImg" alt="check" />
      </div>
      <li className={`todo ${completed ? "active" : ""}`}>{content}</li>
      <img className='delete-icon svgImg' src={closeIcon} alt="close" onClick={removeTodoHandler} />
    </div>
  )
}

export default Todo