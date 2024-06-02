// import React from "react";
// import SignUp from "./SignUp";
// import Login from "./Login";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Dashboard from "./Dashboard";

// const App = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <SignUp />,
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//     {
//       path: "/dashboard",
//       element: <Dashboard />,
//     },
//   ]);
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// };

// export default App;
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Layout from "./Layout"; // The layout component
import AdminPanel from "./components/Admin/AdminPanel";
import UpdateUser from "./components/UpdateUserDetails/UpdateUser";
import ProjectForm from "./components/UpdateUserDetails/ProjectForm";
import ProjectList from "./components/UpdateUserDetails/ProjectList";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useNavigate } from "react-router-dom";
import CreateProject from "./components/Admin/CreateProject";
import ProjectD from "./components/ProjectHeirarchy/ProjectD";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/user-dashboard",
      element: (
        <PrivateRoute>
          <Layout />
        </PrivateRoute>
      ),
    },
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/admin-dashboard",
      element: (
        <PrivateRoute requiredRole="Technical Manager">
          <AdminPanel />
        </PrivateRoute>
      ),
    },
    {
      path: "/update",
      element: <CreateProject />,
    },
    {
      path: "/project",
      element: <ProjectForm />,
    },
    {
      path: "/projectlist",
      element: <ProjectList />,
    },
    {
      path: "/ph",
      element: <ProjectD />,
    },
    {
      path: "/create-project",
      element: (
        <PrivateRoute requiredRole="Technical Manager">
          <CreateProject />
        </PrivateRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
