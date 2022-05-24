import { Navigate, Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyled";
import AntiGoalKeeper from "./components/GoalKeeper/AntiGoalKeeper";
import GoalKeeper from "./components/GoalKeeper/GoalKeeper";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import GamesPage from "./pages/GamesPage/GamesPage";

import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadGamesThunk } from "./redux/thunks/gamesThunks";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGamesThunk(localStorage.token));
  }, [dispatch]);

  return (
    <>
      <AppStyled>
        <h1>GamersLand</h1>
      </AppStyled>
      <Routes>
        <Route
          path="/"
          element={
            <GoalKeeper>
              <Navigate to="/games" />
            </GoalKeeper>
          }
        />
        <Route
          path="/login"
          element={
            <AntiGoalKeeper>
              <LoginPage />
            </AntiGoalKeeper>
          }
        />
        <Route
          path="/register"
          element={
            <AntiGoalKeeper>
              <RegisterPage />
            </AntiGoalKeeper>
          }
        />
        <Route path="/games/:id" element={<DetailPage />} />
        <Route
          path="/games"
          element={
            <GoalKeeper>
              <GamesPage />
            </GoalKeeper>
          }
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
