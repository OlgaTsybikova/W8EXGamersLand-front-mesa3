import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/users/login" />} />
        <Route path="/users/login" element={<LoginPage />} />
        <Route path="/users/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
