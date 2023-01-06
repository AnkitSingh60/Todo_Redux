import React, { useState } from "react";
import closeIcon from "../images/close.svg";
import checkIcon from "../images/check.svg";
import { completeTodo, removeTodo } from "../redux/features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../redux/features/todo/todoSlice";
const Todo = ({ content, completed, id }) => {
  // console.log('content:', content)
  const [edit, setEdit] = useState(false);
  const [newTask, setNewTask] = useState("");

  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.todos);
  console.log("todoList:", todoList);

  const completeTodoHandler = () => {
    dispatch(completeTodo(id));
  };
  const removeTodoHandler = () => {
    dispatch(removeTodo(id));
  };

  const handleEdit = () => {
    dispatch(updateTodo({
          id: id,
          content: newTask,
          
        }));
    console.log("newTask:", id,content);
  };

  return (
    <div className="todo_container">
      <div className={`circle ${completed ? "active" : ""}`}>
        <img src={checkIcon} className="svgImg" alt="check" />
      </div>
      <li className={`todo ${completed ? "active" : ""}`} onClick={completeTodoHandler}>{content}</li>
      <span
        class="material-symbols-outlined editIcon"
        onClick={() => {
          setEdit(true);
        }}
      >
        edit_square
      </span>
      <img
        className="delete-icon svgImg close"
        src={closeIcon}
        alt="close"
        onClick={removeTodoHandler}
      />

      {edit && (
        <>
          <input
            className="updateInput"
            type="text"
            placeholder="update..."
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
          />
          <button
            className="addButton"
            onClick={() => {
              handleEdit();
            }}
          >
            +
          </button>
        </>
      )}
    </div>
  );
};

export default Todo;
