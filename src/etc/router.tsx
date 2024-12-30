import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../app/pages/Auth";
import DashboardPage from "../app/pages/Dashboard";
import DashboardHomePage from "../app/pages/Dashboard/Home";
import DashboardBoardsPage from "../app/pages/Dashboard/Boards";
import DashboardAnalyticsPage from "../app/pages/Dashboard/Analytics";
import DashboardCategoriesPage from "../app/pages/Dashboard/Categories";
import DashboardLayout from "../app/pages/Dashboard/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
        children: [
          {
            path: "",
            element: <DashboardHomePage />,
          },
          {
            path: "boards",
            element: <DashboardBoardsPage />,
          },
          {
            path: "analytics",
            element: <DashboardAnalyticsPage />,
          },
          {
            path: "categories",
            element: <DashboardCategoriesPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
]);

export default router;
