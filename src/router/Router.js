import About from "../pages/About";
import Posts from "../pages/Posts";
import PostOne from "../pages/PostOne";
import Login from "../pages/Login";

export const privateRoutes = [
  { path: "/post", component: <Posts />, exact: true },
  { path: "/about", component: <About />, exact: true },
  { path: "/post/:id", component: <PostOne />, exact: true },
  { path: "*", component: <Posts />, exact: false },
];
export const publicRoutes = [
  { path: "/login", component: <Login />, exact: true },
  { path: "*", component: <Login />, exact: true },
];
