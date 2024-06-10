// import React from "react";
// import AdminSidebar from "./AdminSidebar";
// import AdminProject from "./AdminProject";
// import { useState } from "react";
// import AdminNavBar from "./AdminNavBar";
// const AdminPanel = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };
//   return (
//     <div className="flex h-screen">
//       <AdminSidebar />
//       <div className="flex-1 flex flex-col">
//         <AdminNavBar onSearch={handleSearch} />
//         <main className="flex-1 p-4 ml-64">
//           {/* <!--Start Background Animation Body--> */}
//           <div className="area">
//             <ul className="circles">
//               <li></li>
//               <li></li>
//               <li></li>
//               <li></li>
//               <li></li>
//               <li></li>
//               <li></li>
//               <li></li>
//               <li></li>
//               <li></li>
//             </ul>
//           </div>
//           {/* <!--End Background Animation Body--> */}
//           {/* <main className="flex-1 p-4 ml-64 bg-gradient-to-r from-zinc-50 to-zinc-300 ..."> */}
//           <AdminProject searchTerm={searchTerm} />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;

////// ------------------- Currently the Test animation is working fine -------------------------
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
        <main className="flex-1 p-4 ml-64 relative">
          {/* <!--Start Background Animation Body--> */}
          <div className="area absolute inset-0 z-0">
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          {/* <!--End Background Animation Body--> */}
          {/* <main className="flex-1 p-4 ml-64 bg-gradient-to-r from-zinc-50 to-zinc-300 ..."> */}
          <AdminProject searchTerm={searchTerm} />
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;

////// ------------------- Currently the animation is working -------------------------
