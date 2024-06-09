import React from "react";
import { FaHome, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("userRole");
    sessionStorage.removeItem("userId");
    navigate("/login");
  };
  return (
    <div className="w-64 bg-gray-800 fixed h-full px-4 py-2">
      <div className=" my-2 mb-4">
        <h1 className=" text-xl text-white font-bold"> User Dashboard </h1>
      </div>
      {/* <hr /> */}
      <hr class=" w-full h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded"></hr>
      <ul className=" mt-3 text-white font-bold">
        <li className=" mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className=" px-3">
            <FaHome className=" inline-block w-6 h-6 mr-2 -mt2"></FaHome>
            Dashboard
          </a>
        </li>

        <li className=" mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className=" px-3">
            <FaUser className=" inline-block w-6 h-6 mr-2 -mt2"></FaUser>
            Account
          </a>
        </li>

        <li className=" mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className=" px-3">
            <MdEdit className=" inline-block w-6 h-6 mr-2 -mt2"></MdEdit>
            Edit Details
          </a>
        </li>

        <li className=" mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to="/signup" className=" px-3">
            <FaSignInAlt className=" inline-block w-6 h-6 mr-2 -mt2"></FaSignInAlt>
            Sign In
          </Link>
        </li>

        <li className=" mb-2 rounded hover:shadow hover:bg-blue-500 py-2 ml-3">
          <FaSignOutAlt className=" inline-block w-6 h-6 mr-2 -mt2"></FaSignOutAlt>
          <button className=" -ml-0" onClick={handleLogout}>
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
