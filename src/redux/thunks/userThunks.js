import axios from "axios";
import { registerActionCreator } from "../features/userSlice";

const registerThunk = (userData) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}/users/register`;
  const { data } = await axios.post(url, userData);

  dispatch(registerActionCreator(data));
};

export default registerThunk;
