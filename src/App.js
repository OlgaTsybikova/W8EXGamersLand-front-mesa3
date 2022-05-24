import { Navigate, Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyle";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <>
      <AppStyled>
        <h1>GamersLand</h1>
      </AppStyled>
      <Routes>
        <Route path="/" element={<Navigate to="/LoginPage" />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
