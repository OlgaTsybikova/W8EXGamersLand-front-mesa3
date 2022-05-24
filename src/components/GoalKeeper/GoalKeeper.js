import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoalKeeper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  if (token) {
    return children;
  } else {
    return null;
  }
};

export default GoalKeeper;
