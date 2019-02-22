import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { addTodo } from "../../actions/todoActions";
import { withRouter } from "react-router-dom";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ errors: {} });
  }
  onSubmit(e) {
    e.preventDefault();
    const { user } = this.props.auth;
    const newTodo = {
      text: this.state.text
    };
    console.log(newTodo);

    this.props.addTodo(newTodo);
    this.setState({ text: "" });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">
            Tasks to be done...
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.text
                  })}
                  placeholder="Name"
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  required
                />
                {errors.text && (
                  <div className="invalid-feedback">{errors.text}</div>
                )}
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addTodo }
)(withRouter(TodoForm));
