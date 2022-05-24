import axios from "axios";
import {
  loadGameActionCreator,
  loadGamesActionCreator,
} from "../features/gamesSlice";

export const loadGamesThunk = (token) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}games`;
  try {
    const {
      data: { games },
    } = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });

    if (games) {
      dispatch(loadGamesActionCreator(games));
    }
  } catch (error) {
    return error.message;
  }
};

export const loadGameThunk = (id, token) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}/games/:${id}`;
  try {
    const {
      data: { game },
    } = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });

    if (game) {
      dispatch(loadGameActionCreator(game));
    }
  } catch (error) {
    return error.message;
  }
};
