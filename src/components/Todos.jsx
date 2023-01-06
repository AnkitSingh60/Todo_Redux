import React,{useRef} from 'react'
import Todo from './Todo'
import {useSelector, useDispatch} from "react-redux";
import {addTodo, clearCompleted, selectActiveTodos, selectCompletedTodos, selectShowActiveTodos, selectShowCompletedTodos, selectShowTodos,selectTodos} from "../redux/features/todo/todoSlice";

import {showCompletedFunction} from "../redux/features/todo/todoSlice"
import {showAllFunction} from "../redux/features/todo/todoSlice"
import {showActiveFunction} from "../redux/features/todo/todoSlice"


const Todos = () => {
  const inputRef = useRef();
  // console.log('inputRef:', inputRef)
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos)
  const completedTodos = useSelector(selectCompletedTodos)
  const activeTodos = useSelector(selectActiveTodos)
  
  const showTodos = useSelector(selectShowTodos)
  const showActiveTodos = useSelector(selectShowActiveTodos)
  const showCompletedTodos = useSelector(selectShowCompletedTodos)

  let todosToRender;
  let activeTodosNumber = 0;

  const submitTodo = (e) => {
    e.preventDefault();
    if(inputRef.current.value.trim()){
      dispatch(addTodo({
        id: Math.random()* 1000,
        content: inputRef.current.value,
        completed: false
      }))
    }
    inputRef.current.value = ""
  }

  const showCompletedHandler = () => {
    dispatch(showCompletedFunction())
  }
  const showAllHandler = () => {
    dispatch(showAllFunction())
  }
  const showActiveHandler = () => {
    dispatch(showActiveFunction())
  }
  const clearCompletedHandler = () => {
    dispatch(clearCompleted())
  }

  if(showActiveTodos) {
    todosToRender = activeTodos;
  } else if(showCompletedTodos){
    todosToRender = completedTodos
  }else {
    todosToRender = todos
  }

  todos?.forEach((todo)=> {
    if(!todo.completed){
      activeTodosNumber++
    }
  })


  return (
    <div className='todos'>
      <h1>Todo from Todos component</h1>
      <div className="input_container">
        <form onSubmit={submitTodo}>
          <input type="text" placeholder='Create todo here...' ref={inputRef} />
          <button type='submit' hidden></button>
        </form>
      </div>

      <div className="todos_container">
        {
          todosToRender.map((todo)=>(
            <Todo
            content={todo.content}
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            />
          ))
        }
        <div className="todos_footer">
          <p>{activeTodosNumber} task remaining</p>
          <div className="types">
          <div className="types">
            <p className={`clear ${showTodos ? "active" : ""}`} onClick={showAllHandler} >All</p>
            <p className={`clear ${showActiveTodos ? "active" : ""}`} onClick={showActiveHandler}>Active</p>
            <p className={`clear ${showCompletedTodos ? "active" : ""}`} onClick={showCompletedHandler}>Completed</p>
            </div>
          </div>
            <p className='clear' onClick={clearCompletedHandler}>Clear completed</p>
        </div>
      </div>
    </div>
  )
}

export default Todos