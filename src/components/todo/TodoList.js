import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return todos.map(todo => <TodoItem key={todo._id} todo={todo} />);
  }
}
TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;
