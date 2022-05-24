import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutActionCreator } from "../../redux/features/userSlice";

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
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default GamesPage;
