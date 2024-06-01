import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminDashboard from "./AdminDashboard";
import ProjectList from "../UpdateUserDetails.jsx/ProjectList";
import UserProject from "./UserProject";

const AdminPanel = () => {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminDashboard />
        {/* <main className="flex-1 p-4 ml-64 bg-gradient-to-r from-neutral-100 to-slate-300"> */}
        <main className="flex-1 p-4 ml-64 bg-slate-300">
          <ProjectList />
          {/* <UserProject /> */}
          {/* Add more cards or components here */}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
