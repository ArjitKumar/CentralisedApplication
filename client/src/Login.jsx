// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const handleLogin = async () => {
//     // Replace with actual login logic
//     const response = await fetch('https://your-api/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username, password })
//     });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({
//       ...credentials,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement login logic here, e.g., call an API endpoint
//     console.log("Logging in with:", credentials);
//     // Reset form fields after submission if needed
//     setCredentials({
//       username: "",
//       password: "",
//     });
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="username"
//           >
//             Username
//           </label>
//           <input
//             type="text"
//             name="username"
//             value={credentials.username}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Username"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="password"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             value={credentials.password}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Password"
//             required
//           />
//         </div>
//         <div className="text-center">
//           <Link to="/dashboard">
//             <button
//               type="submit"
//               className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Log In
//             </button>
//           </Link>
//         </div>
//       </form>
//       <div className="text-center mt-4">
//         <Link to="/signup">
//           New user ?
//           <button
//             type="button"
//             class="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-5"
//           >
//             Register
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Login;
// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
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
        const { message, role } = data;

        if (message === "Login successful") {
          sessionStorage.setItem("userRole", role);

          if (role === "Admin") {
            navigate("/admin-dashboard");
          } else {
            navigate("/");
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
    <div className="w-1/2 ml-auto mr-auto mt-20">
      <div className="flex items-center flex-col">
        <h2 className=" font-bold text-2xl"> Log In</h2>
        <div className="mb-6 w-full">
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-500 dark:text-black"
          >
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6 w-full">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-400 dark:text-black"
          >
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required
          />
        </div>
        <div className=" flex justify-between w-full items-center">
          <button
            onClick={handleLogin}
            className=" h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-7 py-0 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
          {error && <p className="text-red-500">{error}</p>}
          <div className="text-center">
            <Link to="/signup">
              New user ?
              <button
                type="button"
                class="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-5"
              >
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
