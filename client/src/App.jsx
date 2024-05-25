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
import Dashboard from "./components/Dashboard";
import Layout from "./Layout"; // The layout component
import Employee from "./components/Employee";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminPanel from "./components/Admin/AdminPanel";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Parent route renders the layout
      children: [
        // {
        //   path: "dashboard", // Child route
        //   element: <Dashboard />, // Rendered inside the <Outlet />
        // },
      ],
    },
    {
      path: "/signup", // Child route
      element: <SignUp />, // Rendered inside the <Outlet />
    },
    {
      path: "login", // Child route
      element: <Login />, // Rendered inside the <Outlet />
    },
    {
      path: "/admin-dashboard",
      element: <AdminPanel />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
