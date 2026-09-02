import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Test from "../pages/test/page";
import Result from "../pages/result/page";
import JobDetail from "../pages/job/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/result",
    element: <Result />,
  },
  {
    path: "/job/:id",
    element: <JobDetail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;