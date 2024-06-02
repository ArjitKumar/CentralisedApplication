// // import React from "react";
// // import { Navigate } from "react-router-dom";

// // const PrivateRoute = ({ children, requiredRole }) => {
// //   const userRole = sessionStorage.getItem("userRole");

// //   if (!userRole) {
// //     // User is not logged in
// //     return <Navigate to="/login" />;
// //   }

// //   if (requiredRole && userRole !== requiredRole) {
// //     // User does not have the required role
// //     return <Navigate to="/" />;
// //   }

// //   // User is authenticated and has the required role (if specified)
// //   return children;
// // };

// // export default PrivateRoute;
// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";

// const PrivateRoute = ({ children, requiredRole }) => {
//   const location = useLocation();
//   const isAuthenticated = sessionStorage.getItem("isAuthenticated");
//   const userRole = sessionStorage.getItem("userRole");

//   if (!isAuthenticated) {
//     // User is not logged in
//     return <Navigate to="/login" state={{ from: location }} />;
//   }

//   if (requiredRole && userRole !== requiredRole) {
//     // User does not have the required role
//     return <Navigate to="/not-authorized" />;
//   }

//   // User is authenticated and has the required role (if specified)
//   return children;
// };

// export default PrivateRoute;
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, requiredRole }) => {
  const location = useLocation();
  const isAuthenticated = sessionStorage.getItem("isAuthenticated") === "true";
  const userRole = sessionStorage.getItem("userRole");

  if (!isAuthenticated) {
    // User is not logged in
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (requiredRole && userRole !== requiredRole) {
    // User does not have the required role
    return <Navigate to="/not-authorized" />;
  }

  // User is authenticated and has the required role (if specified)
  return children;
};

export default PrivateRoute;
