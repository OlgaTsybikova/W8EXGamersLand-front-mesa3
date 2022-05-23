import axios from "axios";
import {
  loginActionCreator,
  registerActionCreator,
} from "../features/userSlice";

const registerThunk = (userData) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}/users/register`;

  const { data } = await axios.post(url, userData);
  console.log(data);

  dispatch(registerActionCreator(data));
};

export const loginThunk = (userData) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}/users/login`;
  console.log(url);
  const { data } = await axios.post(url, userData);
  console.log(data);
  dispatch(loginActionCreator(data));
};

export default registerThunk;
