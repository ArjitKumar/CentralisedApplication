import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch projects from your API endpoint
        const response = await axios.get(
          "https://localhost:7221/api/Project/user/e258fd23-4c8b-4b0a-8f5e-dc77b5e7d0e1"
        );

        // Extract projects from the response
        const projectsData = response.data;
        console.log(response.data);

        // Set projects state with the extracted data
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    // Call fetchProjects function
    fetchProjects();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <h2>Projects List</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.projectID}>
            <h3>{project.projectName}</h3>
            <p>Description: {project.projectDescription}</p>
            <p>Tech Stack: {project.techStack}</p>
            <p>
              Manager: {project.manager.firstName} {project.manager.lastName}
            </p>
            <p>Manager Role: {project.manager.role}</p>
            <p>
              Knowledge Transfer Link:{" "}
              <a
                href={project.knowledgeTransferLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.knowledgeTransferLink}
              </a>
            </p>
            <p>
              Learning Module Link:{" "}
              <a
                href={project.learningModuleLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.learningModuleLink}
              </a>
            </p>
            <h4>Team Members:</h4>
            <ul>
              {project.teamMembers.$values.map((teamMember) => (
                <li key={teamMember.teamMemberID}>
                  {teamMember.employee ? (
                    <>
                      {teamMember.employee.firstName}{" "}
                      {teamMember.employee.lastName} -{" "}
                      {teamMember.employee.role}
                    </>
                  ) : (
                    <>Team member ID: {teamMember.employeeId}</>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProject;
