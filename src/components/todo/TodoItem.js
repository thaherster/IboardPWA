import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo } from "../../actions/todoActions";

class TodoItem extends Component {
  onDeleteClick(id) {
    console.log(id);
    this.props.deleteTodo(id);
  }
  render() {
    const { todo, auth } = this.props;
    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-10">
            <p className="lead">{todo.text}</p>

            <button
              onClick={this.onDeleteClick.bind(this, todo._id)}
              type="button"
              className="btn btn-info mr-1"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    );
  }
}
TodoItem.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  auth: state.auth
});

export default connect(
  mapStatetoProps,
  { deleteTodo }
)(TodoItem);
