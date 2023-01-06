import React from 'react'
import Todo from './Todo'

const Todos = () => {
  return (
    <div className='todo'>
      <h1>Todo from Todos component</h1>
      <div className="input_container">
        <div className="circle"></div>
        <form>
          <input type="text" placeholder='Create todo here...' />
          <button type='submit' hidden></button>
        </form>
      </div>

      <div className="todo_container">
        <Todo/>
        <div className="todo_footer">
          <p>3 task remaining</p>
          <div className="type">
          <div className="type">
            <p className='clear'>All task</p>
            <p className='clear'>Active task</p>
            <p className='clear'>Completed task</p>
            </div>
            <p className='clear'>Clear completed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todos