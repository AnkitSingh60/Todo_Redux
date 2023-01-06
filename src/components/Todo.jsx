import React from 'react';
import closeIcon from "../images/close.svg"
import checkIcon from "../images/check.svg"

const Todo = () => {
  return (
    <div className='todo_container'>
      <div className="circle">
        <img src={checkIcon} alt="check" />
      </div>
      <li className='todo'>Example todo</li>
      <img className='delete-icon' src={closeIcon} alt="close" />
    </div>
  )
}

export default Todo