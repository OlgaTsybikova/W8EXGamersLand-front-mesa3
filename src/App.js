import { Navigate, Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyled";
import AntiGoalKeeper from "./components/GoalKeeper/AntiGoalKeeper";
import GoalKeeper from "./components/GoalKeeper/GoalKeeper";
import DetailPage from "./pages/DetailPage/DetailPage";
import GamesPage from "./pages/GamesPage/GamesPage";

import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
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
      </Routes>
    </>
  );
}

export default App;
