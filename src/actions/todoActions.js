import axios from "axios";

import { ADD_TODO, GET_ERRORS, GET_TODOS, DELETE_TODO } from "./types";

//Add Todo
export const addTodo = todoData => dispatch => {
  axios
    .post("/api/todos", todoData)
    .then(res => {
      dispatch({
        type: ADD_TODO,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//GET  Todos
export const getTodos = () => dispatch => {
  axios
    .get("/api/todos")
    .then(res => {
      dispatch({
        type: GET_TODOS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Delte Todo
export const deleteTodo = id => dispatch => {
  axios
    .delete(`/api/todos/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_TODO,
        payload: id
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
