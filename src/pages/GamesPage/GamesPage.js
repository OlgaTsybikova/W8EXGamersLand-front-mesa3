import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutActionCreator } from "../../redux/features/userSlice";
import { GamesPageStyled } from "./GamesPageEstyled";
import CardGameList from "../../components/CardGameList/CardGameList";
import { useEffect } from "react";
import { loadGamesThunk } from "../../redux/thunks/gamesThunks";

const GamesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutActionCreator());
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    dispatch(loadGamesThunk(localStorage.token));
  }, [dispatch]);

  return (
    <GamesPageStyled>
      <h1>This are all your games</h1>
      <CardGameList />
      <button className="button-logOut" onClick={logout}>
        LogOut
      </button>
    </GamesPageStyled>
  );
};

export default GamesPage;
