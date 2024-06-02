import React, { useState } from "react";
import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa";

const AdminNavBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
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
        <div className="text-white">
          <FaUserCircle className="w-6 h-6 mt-1" />
        </div>
      </div>
    </nav>
  );
};

export default AdminNavBar;
