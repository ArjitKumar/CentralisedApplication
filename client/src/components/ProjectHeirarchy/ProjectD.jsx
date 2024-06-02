import React, { useState, useEffect } from "react";
import "./ProjectD.css"; // Import custom CSS

const ProjectD = ({ projectId }) => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(
          `https://localhost:7221/api/Project/user/F131EA52-2951-4FEF-953B-08DC821D59F5`
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch project details: ${response.statusText}`
          );
        }
        const data = await response.json();
        setProject(data[0]); // Assuming API returns an array with one project object
      } catch (error) {
        console.error("Error fetching project details:", error.message);
        // Handle error fetching data
      }
    };

    fetchProjectDetails();
  }, [projectId]);

  if (!project) {
    return <div>Loading...</div>;
  }

  // Function to group team members by their roles
  const groupTeamMembersByRole = (teamMembers) => {
    const groupedMembers = {
      "Technical Lead": [],
      "Software Developer": [],
      "Graduate Engineer Trainee": [],
      Tester: [],
    };

    teamMembers.forEach((member) => {
      if (groupedMembers[member.employeeRole]) {
        groupedMembers[member.employeeRole].push(member);
      }
    });

    return groupedMembers;
  };

  // Render team members grouped by roles as a nested tree
  const renderTeamHierarchy = (groupedMembers) => {
    return Object.keys(groupedMembers).map(
      (role) =>
        groupedMembers[role].length > 0 && (
          <div
            key={role}
            className="flex flex-col items-center relative role-group"
          >
            <div className="flex space-x-4">
              {groupedMembers[role].map((member) => (
                <div
                  key={member.employeeId}
                  className="flex flex-col items-center member"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mb-2">
                    {member.employeeName.charAt(0)}
                  </div>
                  <span className="font-bold">{member.employeeName}</span>
                  <span className="text-gray-600">{member.employeeRole}</span>
                </div>
              ))}
            </div>
          </div>
        )
    );
  };

  const groupedMembers = groupTeamMembersByRole(project.teamMembers);

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">Team Members Hierarchy:</h3>
      <div className="flex flex-col items-center manager-container">
        <div className="flex flex-col items-center member">
          <div className="w-24 h-24 rounded-full bg-red-500 flex items-center justify-center text-white font-bold mb-2">
            {project.manager.managerFirstName.charAt(0)}
          </div>
          <span className="font-bold">
            {project.manager.managerFirstName} {project.manager.managerLastName}
          </span>
          <span className="text-gray-600">Manager</span>
        </div>
        {renderTeamHierarchy(groupedMembers)}
      </div>
    </div>
  );
};

export default ProjectD;

// import React, { useEffect, useState } from "react";
// import "./ProjectD.css";

// const ProjectD = ({ projectId }) => {
//   const [projectData, setProjectData] = useState(null);

//   useEffect(() => {
//     fetch(
//       `https://localhost:7221/api/Project/user/F131EA52-2951-4FEF-953B-08DC821D59F5`
//     )
//       .then((response) => response.json())
//       .then((data) => setProjectData(data))
//       .catch((error) => console.error("Error fetching project data:", error));
//   }, [projectId]);

//   const renderTeamMembers = (teamMembers) => {
//     const roles = [
//       "Technical Lead",
//       "Software Developer",
//       "Graduate Engineer Trainee",
//       "Tester",
//     ];

//     return roles.map((role) => {
//       const membersInRole = teamMembers.filter(
//         (member) => member.employeeRole === role
//       );
//       if (membersInRole.length === 0) return null;

//       return (
//         <div className="role-group" key={role}>
//           {membersInRole.map((member) => (
//             <div className="member" key={member.employeeId}>
//               <div className="circle">{member.employeeName}</div>
//               <div className="role">{role}</div>
//             </div>
//           ))}
//         </div>
//       );
//     });
//   };

//   if (!projectData) {
//     return <div>Loading...</div>;
//   }

//   const { manager, teamMembers } = projectData;

//   return (
//     <div className="project-details">
//       <div className="manager-container">
//         <div className="member">
//           <div className="circle">
//             {manager.managerFirstName} {manager.managerLastName}
//           </div>
//           <div className="role">Manager</div>
//         </div>
//       </div>
//       {renderTeamMembers(teamMembers)}
//     </div>
//   );
// };

// export default ProjectD;
