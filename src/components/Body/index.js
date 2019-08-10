    
import React from "react";
import EmptyTodo from "../../assets/images/empty_todo.svg";
import Deleteicon from "../../assets/images/delete.svg";
import styles from "./style.module.css";

const Body = ({ todoList, onToggle, onDelete }) => {
  return (
    <div
      className={`${styles.bodyContainer} ${
        todoList.length > 0 ? "" : styles.emptyBody
      }`}
    >
      {todoList.length === 0 && (
        <div className={styles.emptyContainer}>
          <img src={EmptyTodo} alt="empty-todo" />
          <p className={styles.emptyContainerMainText}>
            Hurray, no pending tasks!
          </p>
          <p className={styles.emptyContainerSubText}>Add a new task below</p>
        </div>
      )}
      {todoList.length > 0 &&
        todoList.map((todo, index) => (
          <div
            key={todo.id}
            className={`${styles.todoItem} ${
              todo.isCompleted ? `${styles.todoComplete}` : `${styles.todoActive}`
            }`}
          >
            <input
              className={styles.toggle}
              type="checkbox"
              name={todo.id}
              checked={todo.isCompleted}
              onChange={onToggle}
            />
            {todo.text}
            {todo.isCompleted && <img src={Deleteicon} alt="delete" className={styles.todoDelete} onClick={() => onDelete(todo.id)}/>}
          </div>
        ))}
    </div>
  );
};

export default Body;