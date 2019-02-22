import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import { getTodos } from "../../actions/todoActions";

class Todo extends Component {
  componentDidMount() {
    //if is not authenticatd redirect to landing
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }

    this.props.getTodos();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  render() {
    const { todos } = this.props.todo;
    let todoContent;
    if (todos === null) {
      todoContent = <h1>No TODOS or Loading</h1>;
    } else {
      todoContent = <TodoList todos={todos} />;
    }
    return (
      <div className="feed">
        <div className="row">
          <div className="col-md-12">
            <TodoForm />
            {todoContent}
          </div>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  getTodos: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired
};
const mapStatetoProps = state => ({
  auth: state.auth,
  todo: state.todo
});

export default connect(
  mapStatetoProps,
  { getTodos }
)(Todo);
