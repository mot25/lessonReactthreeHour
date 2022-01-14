import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/index";

export default function LinkHeader() {
  const { isAuth, setisAuth } = useContext(AuthContext);
  const exit = (e) => {
    e.preventDefault();
    setisAuth(false);
    localStorage.removeItem('auth')
  };
  return (
    <div>
      <Link className="navbarLinks" to="/post">
        Post
      </Link>
      <Link className="navbarLinks" to="/about">
        about
      </Link>
      <button className="navbarLinks" onClick={exit}>
        Exit
      </button>
    </div>
  );
}
