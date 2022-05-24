import { Navigate, Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyled";
import GoalKeeper from "./components/GoalKeeper/GoalKeeper";
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
        <Route path="/" element={<Navigate to="/games" />} />
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
      </Routes>
    </>
  );
}

export default App;
