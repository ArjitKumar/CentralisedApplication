import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UserProject from "./components/UserProject";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Dashboard />
        {/* <main className="flex-1 p-4 ml-64 bg-gradient-to-r from-neutral-100 to-slate-300"> */}
        <main className="flex-1 p-4 ml-64 bg-slate-300">
          {/* <ProjectList /> */}
          <UserProject />
          {/* Add more cards or components here */}
        </main>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
