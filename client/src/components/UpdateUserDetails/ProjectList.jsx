// // // src/components/ProjectList.js

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import Modal from "./Modal";

// // const ProjectList = () => {
// //   const [projects, setProjects] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [selectedProject, setSelectedProject] = useState(null);

// //   useEffect(() => {
// //     const fetchProjects = async () => {
// //       try {
// //         const response = await axios.get("https://localhost:7221/projects");
// //         setProjects(response.data);
// //         setLoading(false);
// //       } catch (err) {
// //         setError(err.message);
// //         setLoading(false);
// //       }
// //     };

// //     fetchProjects();
// //   }, []);

// //   const handleViewDetails = (project) => {
// //     setSelectedProject(project);
// //     setIsModalOpen(true);
// //   };

// //   const handleCloseModal = () => {
// //     setIsModalOpen(false);
// //     setSelectedProject(null);
// //   };

// //   if (loading) return <p>Loading...</p>;
// //   if (error) return <p>Error: {error}</p>;

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-2xl font-bold mb-4">Projects List</h1>
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //         {projects.map((project) => (
// //           <div
// //             key={project.projectID}
// //             className="bg-white p-4 rounded-lg shadow-md"
// //           >
// //             <h2 className="text-xl font-bold mb-2">{project.projectName}</h2>
// //             <p className="mb-2">{project.projectDescription}</p>
// //             <a
// //               href={project.knowledgeTransferLink}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-blue-500 hover:underline"
// //             >
// //               Knowledge Transfer
// //             </a>
// //             <br />
// //             <a
// //               href={project.learningModuleLink}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-blue-500 hover:underline"
// //             >
// //               Learning Module
// //             </a>
// //             <p className="mt-2">
// //               <span className="font-bold">Tech Stack:</span> {project.techStack}
// //             </p>
// //             <button
// //               onClick={() => handleViewDetails(project)}
// //               className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
// //             >
// //               View Project Details
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //       <Modal
// //         isOpen={isModalOpen}
// //         onClose={handleCloseModal}
// //         project={selectedProject}
// //       />
// //     </div>
// //   );
// // };

// // export default ProjectList;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Modal from "./Modal";

// const ProjectList = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await axios.get("https://localhost:7221/projects");
//         setProjects(response.data);
//         console.log(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   const handleViewDetails = (project) => {
//     setSelectedProject(project);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedProject(null);
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Projects List</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {projects.map((project) => (
//           <div
//             key={project.projectID}
//             className="bg-white p-4 rounded-lg shadow-md"
//           >
//             <h2 className="text-xl font-bold mb-2">{project.projectName}</h2>
//             <p className="mb-2">{project.projectDescription}</p>
//             <p className="text-sm text-gray-600 mb-2">
//               Manager: {project.managerFirstName} {project.managerLastName}
//             </p>
//             <a
//               href={project.knowledgeTransferLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:underline"
//             >
//               Knowledge Transfer
//             </a>
//             <br />
//             <a
//               href={project.learningModuleLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:underline"
//             >
//               Learning Module
//             </a>
//             <p className="mt-2">
//               <span className="font-bold">Tech Stack:</span> {project.techStack}
//             </p>
//             <button
//               onClick={() => handleViewDetails(project)}
//               className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               View Project Details
//             </button>
//           </div>
//         ))}
//       </div>
//       <Modal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         project={selectedProject}
//       />
//     </div>
//   );
// };

// export default ProjectList;

// src/components/ProjectList.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("https://localhost:7221/api/Project");
        setProjects(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Projects List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.projectID}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-bold mb-2">{project.projectName}</h2>
            <p className="mb-2">{project.projectDescription}</p>
            <a
              href={project.knowledgeTransferLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Knowledge Transfer
            </a>
            <br />
            <a
              href={project.learningModuleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Learning Module
            </a>
            <p className="mt-2">
              <span className="font-bold">Tech Stack:</span> {project.techStack}
            </p>
            <p className="mt-2">
              <span className="font-bold">Manager:</span>{" "}
              {project.managerFirstName} {project.managerLastName}
            </p>
            <button
              onClick={() => handleViewDetails(project)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Project Details
            </button>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </div>
  );
};

export default ProjectList;
