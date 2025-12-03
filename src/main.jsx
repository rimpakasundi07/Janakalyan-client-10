import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./components/Home/Home";
import AuthProvider from "./context/AuthProvider";
import Register from "./components/Register/Register";
import Issues from "./components/Issues/Issues";
import Login from "./components/Login/Login";
import AllIssue from "./components/AllIssue/AllIssue";
import AddIssues from "./components/AddIssues/AddIssues";
import MyIssues from "./components/MyIssues/MyIssues";
import MyContribution from "./components/MyContribution/MyContribution";
import { ToastContainer } from "@rskm/react-sparkalert";
import "@rskm/react-sparkalert/dist/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/issues",
        Component: Issues,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/allIssue",
        element: <AllIssue></AllIssue>,
      },
      {
        path: "/addIssues",
        element: <AddIssues></AddIssues>,
      },
      {
        path: "/myIssues",
        element: <MyIssues></MyIssues>,
      },
      {
        path: "/myContribution",
        element: <MyContribution></MyContribution>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer position="top-center" autoClose={5000} theme="colored" />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
