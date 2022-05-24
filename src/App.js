import { Navigate, Route, Routes } from "react-router-dom";
import GamesPage from "./pages/GamesPage/GamesPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <>
      <h1>GamersLand in process...</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/games" element={<GamesPage />} />
      </Routes>
    </>
  );
}

export default App;
