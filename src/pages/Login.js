import React, { useContext } from "react";
import { AuthContext } from "../Context/index";

export default function Login() {
  const { isAuth, setisAuth } = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    localStorage.setItem("auth", "true");
    setisAuth(true);
  };
  return (
    <div>
      <h1>login</h1>
      <form>
        <input />
        <input type="password" />
        <button onClick={login}>enter</button>
      </form>
    </div>
  );
}
