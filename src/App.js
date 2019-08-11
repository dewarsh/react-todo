import React, { Component } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  state = {
    todolist: [],
    currentFilter: "All tasks"
  };

  onTodoSubmit = value => {
    this.setState({
      todolist: [...this.state.todolist, value]
    });
  };

  onTodoToggle = e => {
    const { todolist } = this.state;
    const id = parseInt(e.target.name, 10);
    const tempTodo = todolist.map(todo => {
      if (todo.id === id) {
        return { ...todo, isCompleted: e.target.checked };
      }
      return todo;
    });
    this.setState({
      todolist: tempTodo
    });
  };

  onDeleteTodo = id => {
    const { todolist } = this.state;
    const tempTodo = todolist.filter(todo => todo.id !== id);
    this.setState({
      todolist: tempTodo
    });
  };

  onTodoFilter = e => {
    this.setState({
      currentFilter: e.target.value
    });
  };

  render() {
    const { todolist, currentFilter } = this.state;
    const completedTodo = todolist.filter(todo => todo.isCompleted);
    const activeTodo = todolist.filter(todo => !todo.isCompleted);
    const filteredTodo =
      currentFilter === "All tasks"
        ? todolist
        : currentFilter === "Completed"
        ? completedTodo
        : activeTodo;
    return (
      <div className="todo-container">
        <Header
          isFilterVisible={todolist.length > 0}
          onFilterToggle={this.onTodoFilter}
        />
        <Body
          todoList={filteredTodo}
          onToggle={this.onTodoToggle}
          onDelete={this.onDeleteTodo}
        />
        <Footer onSave={this.onTodoSubmit} />
      </div>
    );
  }
}

export default App;