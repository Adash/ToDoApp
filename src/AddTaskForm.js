import React, { Component } from "react";

const initialState = {
  title: "",
  text: "",
  completed: false
};

class AddTaskForm extends Component {
  state = initialState;

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitForm = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState(initialState);
  };

  render() {
    const { title, text } = this.state;

    return (
      <form className="commentForm" onSubmit={this.submitForm}>
        <div className="form-group">
          <label>Task</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Task notes</label>
          <input
            type="text"
            name="text"
            className="form-control"
            value={text}
            onChange={this.handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          value="Submit"
          onClick={this.submitForm}
        >
          {" "}
          submit{" "}
        </button>
      </form>
    );
  }
}

export default AddTaskForm;
