import React, { useState, useEffect } from "react";
import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import adminlogo from "../../assets/profile.png";

const AdminNavBar = ({ onSearch }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };
  const [userData, setUserData] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("userRole");
    sessionStorage.removeItem("userId");
    navigate("/login");
  };
  useEffect(() => {
    // Fetch user data from API
    const fetchUserData = async () => {
      try {
        // Get userId from session storage
        const userId = sessionStorage.getItem("userId");
        if (!userId) {
          throw new Error("User ID not found in session storage");
        }

        const response = await fetch(
          `https://localhost:7221/api/Employee/${userId}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch user data: ${response.statusText}`);
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
        // Handle error fetching user data (e.g., redirect to login)
      }
    };

    fetchUserData();
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-800 px-4 py-3 flex justify-between">
      {/* Left side */}
      <div className="flex items-center text-xl">
        <FaBars className="text-white me-4 cursor-pointer" />
        <span className="text-white font-semibold">HCLTech</span>
      </div>
      {/* Right side */}
      <div className="flex items-center gap-x-5">
        <div className="relative md:w-65">
          <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
            <button className="p-1 focus:outline-none text-white md:text-black">
              <FaSearch />
            </button>
          </span>
          <input
            type="text"
            className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search projects"
          />
        </div>
        <div className="relative">
          <button
            className="text-white group"
            onClick={toggleDropdown}
            onBlur={closeDropdown}
          >
            {userData && (
              <img
                src={adminlogo} // Replace with actual user image URL from API
                alt="User"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
            )}
            {/* Dropdown content */}
            {dropdownOpen && (
              <div className="z-10 absolute bg-slate-100 rounded-lg shadow mt-2 right-0 w-48 py-1">
                <div className="px-4 py-2">
                  {/* <p className="text-sm font-extrabold">{userData.name}</p> */}
                  <p className="text-xs text-gray-900 font-bold">
                    @{userData.username}
                  </p>
                </div>
                <ul className="text-sm text-gray-800 font-semibold">
                  <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                    Email: <span>{userData.email}</span>
                  </li>
                  <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                    Phone: {userData.phone}
                  </li>
                  {/* Add other user information as needed */}
                  <li
                    onClick={handleLogout}
                    className="hover:bg-gray-200 px-4 py-2 cursor-pointer"
                  >
                    Log Out
                  </li>
                </ul>
              </div>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavBar;
