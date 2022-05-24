import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutActionCreator } from "../../redux/features/userSlice";
import { GamesPageStyled } from "./GamesPageEstyled";
import CardGameList from "../../components/CardGameList/CardGameList";

const GamesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutActionCreator());
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <h1>These are all your games</h1>
      <CardGame />
      <GamesPageStyled>
        <button className="button-logOut" onClick={logout}>
          Log Out
        </button>
      </GamesPageStyled>
    </>
  );
};

export default GamesPage;
