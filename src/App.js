import React, { useState, useEffect } from "react";
import "./App.css";
import LinkHeader from "./router/LinkHeader";
import RoutesHeader from "./router/RoutesHeader";
import { AuthContext } from "./Context/index";
function App() {
  const [isAuth, setisAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setisAuth(true)
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isAuth: isAuth,
        setisAuth: setisAuth,
      }}
    >
      <LinkHeader />
      <RoutesHeader />
    </AuthContext.Provider>
  );
}
export default App;
