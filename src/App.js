import React, { Component } from "react";
import AddTaskForm from "./AddTaskForm";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const initialState = [
  {
    title: "first task",
    text: "text of the first todo",
    completed: false
  },
  {
    title: "second task",
    text: "text of the second todo",
    completed: true
  }
];

const TasksList = props => {
  const handleClick = key => {
    props.handleListClick(key);
  };

  const tasks = props.notes.map((note, index) => {
    const completed = note.completed ? "line-through" : "";
    return (
      <li
        key={index}
        className="list-group-item"
        onClick={key => handleClick(index)}
        style={{ textDecoration: completed }}
      >
        <p>
          <span style={{ color: "darkgreen" }}>{note.title}</span>
        </p>
        <p>
          <span style={{ color: "seagreen" }}>{note.text}</span>
        </p>
      </li>
    );
  });

  return <ul className="list-group">{tasks}</ul>;
};

class App extends Component {
  state = {
    notes: initialState
  };

  handleSubmit = value => {
    this.setState({
      notes: [...this.state.notes, value]
    });
  };

  handleListClick = key => {
    const notesCopy = this.state.notes.slice();
    const completed = this.state.notes[key].completed ? false : true;
    notesCopy[key].completed = completed;

    this.setState({
      notes: notesCopy
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <TasksList
                notes={this.state.notes}
                handleListClick={this.handleListClick}
              />
            </div>
            <div className="col-6">
              <AddTaskForm handleSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
