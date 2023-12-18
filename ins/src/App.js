import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyle";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Profile from "./components/pages/Profile";
import { useContext, useState, useCallback } from "react";
import { AuthContext } from "./contexts/AuthContext/AuthContext";
import { NotificationContainer } from "react-notifications";
function App() {
  const { user } = useContext(AuthContext);
  const [rerenderFeed, setRerenderFeed] = useState(0);
  const handleChange = useCallback((newValue) => {
    setRerenderFeed(newValue);
  }, []);
  return (
    <>
      <Login/>
    </>
  );
}

export default App;
