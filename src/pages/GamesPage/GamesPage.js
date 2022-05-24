import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutActionCreator } from "../../redux/features/userSlice";
import CardGame from "../../components/CardGame/CardGame";

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
      <h1>This are all your games</h1>
      <CardGame />
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default GamesPage;
