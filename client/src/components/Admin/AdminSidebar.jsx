// import React from "react";
// import { FaHome, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
// import { MdEdit } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const AdminSidebar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     sessionStorage.removeItem("isAuthenticated");
//     sessionStorage.removeItem("userRole");
//     sessionStorage.removeItem("userId");
//     navigate("/login");
//   };
//   return (
//     <div className="w-64 bg-gray-800 fixed h-full px-4 py-2">
//       <div className=" my-2 mb-4">
//         <h1 className=" text-2x text-white font-bold"> Admin Dashboard </h1>
//       </div>
//       {/* <hr /> */}
//       <hr class=" w-full h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded"></hr>
//       <ul className=" mt-3 text-white font-bold">
//         <li className=" mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
//           <a>
//             <FaHome className=" inline-block w-6 h-6 mr-2 -mt2"></FaHome>
//             Dashboard
//           </a>
//         </li>

//         <li className=" mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
//           <a href="" className=" px-3">
//             <FaUser className=" inline-block w-6 h-6 mr-2 -mt2"></FaUser>
//             Account
//           </a>
//         </li>

//         <li className=" mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
//           <a href="" className=" px-3">
//             <MdEdit className=" inline-block w-6 h-6 mr-2 -mt2"></MdEdit>
//             Add Project
//           </a>
//         </li>

//         <li className=" mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
//           <Link to="/signup" className=" px-3">
//             <FaSignInAlt className=" inline-block w-6 h-6 mr-2 -mt2"></FaSignInAlt>
//             Sign In
//           </Link>
//         </li>

//         <li className=" mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
//           <a href="" className=" px-3">
//             <FaSignOutAlt className=" inline-block w-6 h-6 mr-2 -mt2"></FaSignOutAlt>
//             <button onClick={handleLogout}>Sign Out</button>
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default AdminSidebar;

import React from "react";
import { FaHome, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("userRole");
    sessionStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <div className="w-64 bg-gray-800 fixed h-full px-4 py-2">
      <div className="my-2 mb-4">
        <h1 className="text-2x text-white font-bold">Admin Dashboard</h1>
      </div>
      <hr className="w-full h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded" />
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 ml-3">
          <a>
            <FaHome className="inline-block w-6 h-6 mr-2 -mt2" />
            Dashboard
          </a>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3">
            <FaUser className="inline-block w-6 h-6 mr-2 -mt2" />
            Account
          </a>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to="/create-project" className="px-3">
            {" "}
            {/* Changed to Link component */}
            <MdEdit className="inline-block w-6 h-6 mr-2 -mt2" />
            Add Project
          </Link>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to="/signup" className="px-3">
            <FaSignInAlt className="inline-block w-6 h-6 mr-2 -mt2" />
            Sign In
          </Link>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3">
            <FaSignOutAlt className="inline-block w-6 h-6 mr-2 -mt2" />
            <button onClick={handleLogout}>Sign Out</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
