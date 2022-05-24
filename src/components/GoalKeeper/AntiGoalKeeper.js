import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AntiGoalKeeper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/games");
    }
  }, [navigate, token]);

  if (!token) {
    return children;
  }
};

export default AntiGoalKeeper;
