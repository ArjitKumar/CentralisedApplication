// // export default Login;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "./components/Login.css";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await fetch(
//         "https://localhost:7221/api/Employee/login",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ username, password }),
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();
//         const { message, role, id } = data; // Extract userId from response
//         console.log(id);

//         if (message === "Login successful") {
//           sessionStorage.setItem("userId", id); // Store userId in session storage
//           sessionStorage.setItem("userRole", role);
//           sessionStorage.setItem("isAuthenticated", "true");

//           if (role === "Technical Manager") {
//             navigate("/admin-dashboard");
//           } else {
//             navigate("/user-dashboard");
//           }
//         } else {
//           setError("Login failed");
//           setUsername("");
//           setPassword("");
//         }
//       } else {
//         setError("Login failed");
//         setUsername("");
//         setPassword("");
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//       setError("Login failed");
//       setUsername("");
//       setPassword("");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
//           Log In
//         </h2>
//         {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
//         <form onSubmit={(e) => e.preventDefault()}>
//           <div className="mb-6">
//             <label
//               htmlFor="username"
//               className="block text-sm font-bold text-gray-700 mb-2"
//             >
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Enter your username"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="password"
//               className="block text-sm font-bold text-gray-700 mb-2"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           <div className="flex justify-between items-center">
//             <button
//               onClick={handleLogin}
//               className="w-full py-2 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
//             >
//               Log In
//             </button>
//           </div>
//         </form>
//         <div className="text-center mt-4">
//           <Link to="/" className="text-blue-500 hover:underline">
//             New user? Register
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./components/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(
        "https://localhost:7221/api/Employee/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const { message, role, id } = data;

        if (message === "Login successful") {
          sessionStorage.setItem("userId", id);
          sessionStorage.setItem("userRole", role);
          sessionStorage.setItem("isAuthenticated", "true");

          if (role === "Technical Manager") {
            navigate("/admin-dashboard");
          } else {
            navigate("/user-dashboard");
          }
        } else {
          setError("Login failed");
          setUsername("");
          setPassword("");
        }
      } else {
        setError("Login failed");
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Login failed");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Log In
        </h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your username"
              required
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div className="flex justify-between items-center">
            <button
              onClick={handleLogin}
              className="w-full py-2 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
            >
              Log In
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <Link to="/" className="text-blue-500 hover:underline">
            New user? Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
