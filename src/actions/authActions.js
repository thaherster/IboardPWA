import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

//Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post(
      "https://damp-everglades-11634.herokuapp.com/api/users/register",
      userData
    )
    .then(res => history.push("/login")) //action was not dispatched since only 1 statement is needed to be called here
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Login - Get user token

export const loginUser = userData => dispatch => {
  axios
    .post(
      "https://damp-everglades-11634.herokuapp.com/api/users/login",
      userData
    )
    .then(res => {
      //Save to local storage
      const { token } = res.data;
      //Set token to local storage
      localStorage.setItem("jwtToken", token);
      //Set token to auth Header
      setAuthToken(token);
      //Decode token to get user data
      const decoded = jwt_decode(token);
      //Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Set logged in User

export const setCurrentUser = decoded => {
  return { type: SET_CURRENT_USER, payload: decoded };
};

//Log user out
export const logoutUser = () => dispatch => {
  //Remove token from local storage
  localStorage.removeItem("jwtToken");
  //Remove auth header for futur request
  setAuthToken(false);
  //Set current user into {} whihc will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
