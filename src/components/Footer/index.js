import React from "react";
import styles from "./style.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <input type="text" className={styles.todoInput} placeholder="Add new task..."/>
      <button className={styles.todoSubmitButton}>+</button>
    </div>
  );
};

export default Footer;
