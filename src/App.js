import React, { Component } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  state = {
    todolist: []
  };

  onTodoSubmit = value => {
    this.setState({
      todolist: [...this.state.todolist, value]
    });
  };

  render() {
    return (
      <div className="todo-container">
        <Header />
        <Body />
        <Footer onSave={this.onTodoSubmit} />
      </div>
    );
  }
}

export default App;
