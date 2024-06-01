import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Project from "./components/Project";
import Employee from "./components/Employee";
import ProjectList from "./components/UpdateUserDetails.jsx/ProjectList";

const Layout = () => {
  return (
    // <div className="flex h-screen">
    //   <Sidebar />
    //   <div className="flex-1 flex flex-col">
    //     <Dashboard />
    //     <main className="flex-1 p-4 ml-64">
    //       {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
    //       <Employee />
    //       {/* Add more cards as needed */}
    //       {/* </div> */}
    //       <Outlet />
    //     </main>
    //   </div>
    // </div>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Dashboard />
        {/* <main className="flex-1 p-4 ml-64 bg-gradient-to-r from-neutral-100 to-slate-300"> */}
        <main className="flex-1 p-4 ml-64 bg-slate-300">
          <ProjectList />
          {/* Add more cards or components here */}
        </main>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
