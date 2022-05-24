import { Navigate, Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyled";
import GoalKeeper from "./components/GoalKeeper/GoalKeeper";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
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
