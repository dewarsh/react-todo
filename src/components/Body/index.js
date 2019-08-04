import React from "react";
import EmptyTodo from '../../assets/images/empty_todo.svg';
import styles from "./style.module.css";

const Body = () => {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.emptyContainer}>
        <img src={EmptyTodo} alt="empty-todo-image"/>
        <p className={styles.emptyContainerMainText}>Hurray, no pending tasks!</p>
        <p className={styles.emptyContainerSubText}>Add a new task below</p>
      </div>
    </div>
  );
};

export default Body;
