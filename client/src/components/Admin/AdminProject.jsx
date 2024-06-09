// import React, { useEffect, useState } from "react";
// import Modal from "react-modal";

// const AdminProject = ({ searchTerm }) => {
//   const [projectDetails, setProjectDetails] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [filteredProjects, setFilteredProjects] = useState([]);

//   useEffect(() => {
//     const userId = sessionStorage.getItem("userId");
//     if (!userId) {
//       console.error("User ID not found in session storage");
//       return;
//     }

//     const fetchProjectDetails = async () => {
//       try {
//         const response = await fetch(
//           `https://localhost:7221/api/Project/user/${userId}`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch project details");
//         }
//         const data = await response.json();
//         setProjectDetails(data);
//         setLoading(false);
//         setFilteredProjects(data); // Initialize filteredProjects with all projects
//       } catch (error) {
//         console.error("Error fetching project details:", error);
//         setLoading(false);
//       }
//     };

//     fetchProjectDetails();
//   }, []);

//   useEffect(() => {
//     const filtered = projectDetails.filter(
//       (project) =>
//         project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         project.projectDescription
//           .toLowerCase()
//           .includes(searchTerm.toLowerCase()) ||
//         project.techStack.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredProjects(filtered);
//   }, [searchTerm, projectDetails]);

//   const openModal = (project) => {
//     setSelectedProject(project);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedProject(null);
//     setIsModalOpen(false);
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="p-6 space-y-4">
//       <h2 className="text-2xl font-bold mb-4">My Projects</h2>
//       {filteredProjects.length === 0 ? (
//         <p>No project details found for this user.</p>
//       ) : (
//         filteredProjects.map((project) => (
//           <div
//             key={project.projectID}
//             className="bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-200"
//           >
//             <h3 className="text-xl font-semibold mb-2">
//               {project.projectName}
//             </h3>
//             <p>
//               <strong>Description:</strong> {project.projectDescription}
//             </p>
//             <p>
//               <strong>Tech Stack:</strong> {project.techStack}
//             </p>
//             <button
//               className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onClick={() => openModal(project)}
//             >
//               View Project Details
//             </button>
//           </div>
//         ))
//       )}

//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         contentLabel="Project Details"
//         className="bg-white rounded-lg shadow-lg p-6 border border-gray-300 max-h-full overflow-y-auto"
//         style={{
//           overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
//           content: { marginLeft: "10%", maxWidth: "80%" },
//         }}
//       >
//         {selectedProject && (
//           <>
//             <h2 className="text-2xl font-bold mb-4">Project Details</h2>
//             <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
//               <tbody>
//                 <tr className="bg-gray-100">
//                   <td className="px-6 py-4 font-semibold">Project Name:</td>
//                   <td className="px-6 py-4">{selectedProject.projectName}</td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 font-semibold">Description:</td>
//                   <td className="px-6 py-4">
//                     {selectedProject.projectDescription}
//                   </td>
//                 </tr>
//                 <tr className="bg-gray-100">
//                   <td className="px-6 py-4 font-semibold">
//                     Knowledge Transfer Link:
//                   </td>
//                   <td className="px-6 py-4">
//                     <a
//                       href={selectedProject.knowledgeTransferLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-600 hover:underline"
//                     >
//                       {selectedProject.knowledgeTransferLink}
//                     </a>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 font-semibold">
//                     Learning Module Link:
//                   </td>
//                   <td className="px-6 py-4">
//                     <a
//                       href={selectedProject.learningModuleLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-600 hover:underline"
//                     >
//                       {selectedProject.learningModuleLink}
//                     </a>
//                   </td>
//                 </tr>
//                 <tr className="bg-gray-100">
//                   <td className="px-6 py-4 font-semibold">Tech Stack:</td>
//                   <td className="px-6 py-4">{selectedProject.techStack}</td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 font-semibold">Manager:</td>
//                   <td className="px-6 py-4">
//                     {selectedProject.manager.managerFirstName}{" "}
//                     {selectedProject.manager.managerLastName} (
//                     {selectedProject.manager.managerEmail})
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <h3 className="text-xl font-bold mt-4">Team Members</h3>
//             <table className="min-w-full divide-y divide-gray-200 border border-gray-300 mt-2">
//               <thead className="bg-gray-200">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Name
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Role
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Email
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {selectedProject.teamMembers.map((member, index) => (
//                   <tr
//                     key={member.employeeId}
//                     className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
//                   >
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                       {member.employeeName}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {member.employeeRole}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {member.employeeEmail}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <div className="mt-6 text-right">
//               <button
//                 onClick={closeModal}
//                 className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
//               >
//                 Close
//               </button>
//             </div>
//           </>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default AdminProject;

////////------------------------- Tabular Format ------------------------
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdminProject = ({ searchTerm }) => {
  const navigate = useNavigate();
  const [projectDetails, setProjectDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
      console.error("User ID not found in session storage");
      return;
    }

    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(
          `https://localhost:7221/api/Project/user/${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch project details");
        }
        const data = await response.json();
        setProjectDetails(data);
        console.log(data);
        setLoading(false);
        setFilteredProjects(data); // Initialize filteredProjects with all projects
      } catch (error) {
        console.error("Error fetching project details:", error);
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, []);

  useEffect(() => {
    const filtered = projectDetails.filter(
      (project) =>
        project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.projectDescription
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        project.techStack.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
  }, [searchTerm, projectDetails]);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const handleUpdate = (project) => {
    // Handle update project logic here
    navigate(`/update-project/${project.projectID}`);
  };

  const handleDelete = (projectId) => {
    // Handle delete project logic here
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-950 underline">
        My Projects :-
      </h2>
      {filteredProjects.length === 0 ? (
        <p>No project details found for this user.</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                Project Name
              </th>
              <th className="px-6 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                Project Description
              </th>
              <th className="px-6 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                Tech Stack
              </th>
              <th className="px-6 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project, index) => (
              <tr
                id="table-row"
                key={project.projectID}
                className={"bg-gradient-to-r from-cyan-500 to-blue-500 ..."}
              >
                <td className="px-6 py-4 whitespace-nowrap text-m font-bold text-white">
                  {project.projectName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-m text-white">
                  {project.projectDescription}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-m text-white">
                  {project.techStack}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-m text-white flex space-x-2">
                  <button
                    className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => openModal(project)}
                  >
                    <FaEye />
                  </button>
                  <button
                    className="py-2 px-4 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    onClick={() => handleUpdate(project)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    onClick={() => handleDelete(project.projectID)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Project Details"
        className="bg-white rounded-lg shadow-lg p-6 border border-gray-300 max-h-full overflow-y-auto"
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          content: { marginLeft: "10%", maxWidth: "80%" },
        }}
      >
        {selectedProject && (
          <>
            <h2 className="text-2xl font-bold mb-4">Project Details</h2>
            <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
              <tbody>
                <tr className="bg-gray-100">
                  <td className="px-6 py-4 font-semibold">Project Name:</td>
                  <td className="px-6 py-4">{selectedProject.projectName}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Description:</td>
                  <td className="px-6 py-4">
                    {selectedProject.projectDescription}
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="px-6 py-4 font-semibold">
                    Knowledge Transfer Link:
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={selectedProject.knowledgeTransferLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {selectedProject.knowledgeTransferLink}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">
                    Learning Module Link:
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={selectedProject.learningModuleLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {selectedProject.learningModuleLink}
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="px-6 py-4 font-semibold">Tech Stack:</td>
                  <td className="px-6 py-4">{selectedProject.techStack}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Manager:</td>
                  <td className="px-6 py-4">
                    {selectedProject.manager.managerFirstName}{" "}
                    {selectedProject.manager.managerLastName} (
                    {selectedProject.manager.managerEmail})
                  </td>
                </tr>
              </tbody>
            </table>
            <h3 className="text-xl font-bold mt-4">Team Members</h3>
            <table className="min-w-full divide-y divide-gray-200 border border-gray-300 mt-2">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedProject.teamMembers.map((member, index) => (
                  <tr
                    key={member.employeeId}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {member.employeeName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {member.employeeRole}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {member.employeeEmail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6 text-right">
              <button
                onClick={closeModal}
                className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Close
              </button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default AdminProject;
