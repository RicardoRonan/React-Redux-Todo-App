import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTodos, add, deleteTodo, update } from "./store/action";
import styles from "../src/index.css";
function Todo(props) {
  const todos = props.todo;
  const [newTodo, setNewTodo] = React.useState("");
  const [newStatus, setNewStatus] = React.useState("not done");
  const [eid, setEid] = React.useState();

  let editTodo = (todo) => {
    setNewTodo(todo.task);
    setNewStatus(todo.status);
    setEid(todo.id);
  };
  useEffect(() => {
    props.dispatch(getTodos());
  }, [props]);
  return (
    <div id="todo-container">
      <div>
      <input
        type="text"
        value={newTodo}
        id="addinput"
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      
      />
       
      <button
        onClick={() => {
          props.dispatch(add(newTodo, newStatus));
          setNewTodo("");
        }}
        id="add-btn"
      >
        Add Todo
      </button>
      <input
        type="radio"
        value="done"
        name="status"
        checked={newStatus === "done"}
        onChange={(e) => {
          setNewStatus(e.target.value);
        }}
      />{" "}
      Done
      <input
        type="radio"
        value="not done"
        name="status"
        checked={newStatus === "not done"}
        onChange={(e) => {
          setNewStatus(e.target.value);
        }}
      />
     
      
      {" "}
      Not Done
      <button
        onClick={() => props.dispatch(update(newTodo, newStatus, eid))}
        id="update-btn"
      >
        Update
      </button>
      </div>
      {todos.map((todo, i) => {
        return (
          <div id="todo-list">
            <li
              key={i}
              className={todo.checked ? styles.strike : ""}
              id="todo-item"
            >
              {todo.task} {todo.status}
              <div>
                <button
                  onClick={() => {
                    props.dispatch(deleteTodo(todo.id));
                  }}
                  id="delete-btn"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    editTodo(todo);
                  }}
                  id="edit-btn"
                >
                  Edit
                </button>
              </div>
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default connect((store) => store)(Todo);
