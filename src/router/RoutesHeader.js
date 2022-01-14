import React, {useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./Router";
import { AuthContext } from "../Context/index";

export default function RoutesHeader() {
  const { isAuth, setisAuth } = useContext(AuthContext);
  console.log("isAuth", isAuth);
  return (
    <div>
      <Routes>
        {isAuth
          ? privateRoutes.map((item, i) => (
              <Route
                key={i}
                path={item.path}
                element={item.component}
                exact={item.exact}
              />
            ))
          : publicRoutes.map((item, i) => (
              <Route
                key={i}
                path={item.path}
                element={item.component}
                exact={item.exact}
              />
            ))}
      </Routes>
    </div>
  );
}
