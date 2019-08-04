import React, { Component } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  state = {
    todolist: [],
    currentTodo: ""
  };

  setCurrentTodo = e => {
    this.setState({
      currentTodo: e.target.value
    });
  };

  onTodoSubmit = () => {
    const { currentTodo } = this.state;
    const obj = {
      text: currentTodo,
      status: "active"
    };
    this.setState({
      todolist: [...this.state.todolist, obj],
      currentTodo: ""
    });
  };

  render() {
    const { currentTodo } = this.state;
    return (
      <div className="todo-container">
        <Header />
        <Body />
        <Footer
          setCurrentTodo={this.setCurrentTodo}
          onSave={this.onTodoSubmit}
          value={currentTodo}
        />
      </div>
    );
  }
}

export default App;
