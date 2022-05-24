import { useNavigate } from "react-router-dom";

const GoalKeeper = ({ children }) => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate;

  if (token) {
    return children;
  } else {
    navigate("/login");
    return null;
  }
};

export default GoalKeeper;
