import React from "react";
import styles from "./style.module.css";

const Footer = ({ value, setCurrentTodo, onSave }) => {
  return (
    <div className={styles.footerContainer}>
      <input
        type="text"
        value={value}
        className={styles.todoInput}
        placeholder="Add new task..."
        onChange={e => setCurrentTodo(e)}
      />
      <button
        className={styles.todoSubmitButton}
        onClick={onSave}
        disabled={value.trim().length<=0}
      >
        +
      </button>
    </div>
  );
};

export default Footer;
