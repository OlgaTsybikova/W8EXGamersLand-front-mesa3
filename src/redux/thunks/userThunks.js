import axios from "axios";
import {
  loginActionCreator,
  registerActionCreator,
} from "../features/userSlice";
import jwtDecode from "jwt-decode";

export const loginThunk = (userData) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}user/login`;

  try {
    const {
      data: { token },
    } = await axios.post(url, userData);

    if (token) {
      localStorage.setItem("token", token);
      const { name, username } = jwtDecode(token);
      dispatch(loginActionCreator({ name, username }));
    }
  } catch (error) {
    return error.message;
  }
};

export const registerThunk = (userData) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}user/register`;

  const { data } = await axios.post(url, userData);
  console.log(data);

  dispatch(registerActionCreator(data));
};
