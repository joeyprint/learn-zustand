// src/router.tsx
import { createBrowserRouter, RouteObject } from "react-router-dom";

import BaseLayout from "../Containers/BaseLayout";

import ReactTodo from "./ReactTodo";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [{ index: true, element: <ReactTodo /> }],
  },
];

const router = createBrowserRouter(routes);

export default router;
