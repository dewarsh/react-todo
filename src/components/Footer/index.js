import React, { Component } from "react";
import styles from "./style.module.css";

class Footer extends Component {
  state= {
    currentTodo: ""
  }

  setCurrentTodo = e => {
    this.setState({
      currentTodo: e.target.value
    });
  };

  onTodoSave = () => {
    const { currentTodo } = this.state;
    const { onSave } = this.props;
    const obj = {
      text: currentTodo,
      status: "active"
    };
    onSave(obj);
    this.setState({
      currentTodo: ""
    })
  }

  render() {
    const { currentTodo } = this.state;
    return (
      <div className={styles.footerContainer}>
        <input
          type="text"
          value={currentTodo}
          className={styles.todoInput}
          placeholder="Add new task..."
          onChange={e => this.setCurrentTodo(e)}
        />
        <button
          className={styles.todoSubmitButton}
          onClick={this.onTodoSave}
          disabled={currentTodo.trim().length <= 0}
        >
          +
        </button>
      </div>
    );
  }
}

export default Footer;
