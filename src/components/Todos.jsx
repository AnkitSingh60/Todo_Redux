import React,{useRef} from 'react'
import Todo from './Todo'
import {useSelector, useDispatch} from "react-redux";


const Todos = () => {
  const inputRef = useRef();
  return (
    <div className='todos'>
      <h1>Todo from Todos component</h1>
      <div className="input_container">
        <form>
          <input type="text" placeholder='Create todo here...' ref={inputRef} />
          <button type='submit' hidden></button>
        </form>
      </div>

      <div className="todos_container">
        <Todo/>
        <div className="todos_footer">
          <p>3 task remaining</p>
          <div className="types">
          <div className="types">
            <p className='clear'>All</p>
            <p className='clear'>Active</p>
            <p className='clear'>Completed</p>
            </div>
          </div>
            <p className='clear'>Clear completed</p>
        </div>
      </div>
    </div>
  )
}

export default Todos