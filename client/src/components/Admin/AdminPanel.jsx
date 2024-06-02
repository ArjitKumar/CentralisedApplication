import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminProject from "./AdminProject";
import { useState } from "react";
import AdminNavBar from "./AdminNavBar";
const AdminPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminNavBar onSearch={handleSearch} />
        <main className="flex-1 p-4 ml-64 bg-slate-300">
          <AdminProject searchTerm={searchTerm} />
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
