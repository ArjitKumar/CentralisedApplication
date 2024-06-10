import React, { useState, useEffect } from "react";
import Modal from "../UpdateUserDetails/Modal"; // Assuming Modal component is defined in Modal.js
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const UpdateProject = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // State to store selected user details
  const [users, setUsers] = useState([]); // State to store users fetched from backend
  const [selectedTeamMembers, setSelectedTeamMembers] = useState([]); // State to store selected team members
  const [searchTerm, setSearchTerm] = useState(""); // State to store search term for autocomplete
  const [autocompleteUsers, setAutocompleteUsers] = useState([]); // State to store users for autocomplete
  const [projectName, setProjectName] = useState(""); // State for project name
  const [projectDescription, setProjectDescription] = useState(""); // State for project description
  const [knowledgeTransferLink, setKnowledgeTransferLink] = useState(""); // State for knowledge transfer link
  const [learningModuleLink, setLearningModuleLink] = useState(""); // State for learning module link
  const [techStack, setTechStack] = useState(""); // State for tech stack
  //   const [projectId, setProjectId] = useState(""); // State for project ID

  useEffect(() => {
    // Fetch users from backend API
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://localhost:7221/api/Employee");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data); // Store fetched users in state
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Function to handle modal open and close
  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null); // Reset selectedUser when closing modal
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure form inputs are properly initialized and trimmed
    const sanitizedProjectData = {
      projectId: projectId,
      projectName: projectName,
      projectDescription: projectDescription,
      knowledgeTransferLink: knowledgeTransferLink,
      learningModuleLink: learningModuleLink,
      techStack: techStack,
      managerId: sessionStorage.getItem("userId"),
      teamMembers: selectedTeamMembers.map((member) => ({
        employeeId: member.id,
        employeeName: `${member.firstName} ${member.lastName}`,
        employeeRole: member.role,
        employeeEmail: member.email,
      })),
    };

    console.log("sanitizedProjectData:", sanitizedProjectData);

    try {
      // Send project data to backend
      const response = await fetch(
        "https://localhost:7221/api/Project/UpdateProject",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sanitizedProjectData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create project");
      }

      const responseData = await response.json();
      console.log("Project created successfully:", responseData);
      // Optionally, reset form or provide feedback to the user
      resetForm(); // Reset form fields after successful creation
    } catch (error) {
      // Handle error
      console.error("Error creating project:", error);
      // Provide error feedback to the user
    }
  };

  // Function to reset form fields
  const resetForm = () => {
    setProjectName("");
    setProjectDescription("");
    setKnowledgeTransferLink("");
    setLearningModuleLink("");
    setTechStack("");
    // setProjectId(""); // Reset projectId
    setSelectedTeamMembers([]);
    setSearchTerm("");
    setSelectedUser(null);
  };

  // Function to handle selecting a user from autocomplete
  const handleSelectUser = (user) => {
    setSelectedUser(user);
    openModal();
  };

  // Function to add selected user as a team member
  const addTeamMember = () => {
    if (
      !selectedUser ||
      selectedTeamMembers.some((member) => member.id === selectedUser.id)
    ) {
      return; // Prevent adding null or duplicate team members
    }

    setSelectedTeamMembers([...selectedTeamMembers, selectedUser]);
    setSearchTerm(""); // Clear search term
    setSelectedUser(null); // Reset selectedUser
    closeModal(); // Close modal after adding team member
  };

  // Function to remove a team member from selectedTeamMembers
  const removeTeamMember = (userId) => {
    const updatedTeamMembers = selectedTeamMembers.filter(
      (user) => user.id !== userId
    );
    setSelectedTeamMembers(updatedTeamMembers);
  };

  // Function to handle input change in autocomplete
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    // Filter users based on input
    const filteredUsers = users.filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setAutocompleteUsers(filteredUsers);
  };

  const gobackto = () => {
    navigate("/admin-dashboard");
  };

  // Display autocomplete suggestions
  const autocompleteSuggestions = autocompleteUsers.map((user) => (
    <div
      key={user.id}
      className="cursor-pointer hover:bg-gray-200 p-2"
      onClick={() => handleSelectUser(user)}
    >
      {user.firstName} {user.lastName}
    </div>
  ));

  // Example user details
  const userDetails = selectedUser ? (
    <div>
      <p>
        <strong>Name:</strong> {selectedUser.firstName} {selectedUser.lastName}
      </p>
      <p>
        <strong>Email:</strong> {selectedUser.email}
      </p>
      <p>
        <strong>Role:</strong> {selectedUser.role}
      </p>
      <p>
        <strong>Phone:</strong> {selectedUser.phone}
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        onClick={addTeamMember}
      >
        Add as Team Member
      </button>
    </div>
  ) : null;

  // Display selected team members
  const selectedTeamMembersList = selectedTeamMembers.map((member) => (
    <div
      key={member.id}
      className="flex items-center justify-between border-b border-gray-200 py-2"
    >
      <p>
        {member.firstName} {member.lastName}
      </p>
      <button
        className="text-red-500 hover:text-red-700 focus:outline-none"
        onClick={() => removeTeamMember(member.id)}
      >
        Remove
      </button>
    </div>
  ));

  return (
    <div className="container mx-auto mt-8">
      {/* Project Form */}
      <form
        className="max-w-md mx-auto bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {/* Project Name */}
        <h1 className="text-2xl font-bold mb-4">Update Project</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="projectName"
          >
            Project Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="projectName"
            type="text"
            placeholder="Enter project name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="projectId"
          >
            Project ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="projectId"
            type="text"
            placeholder="Enter Project ID"
            value={projectId}
            readOnly
            // onChange={(e) => setProjectId(e.target.value)}
            //required
          />
        </div>

        {/* Project Description */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="projectDescription"
          >
            Project Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="projectDescription"
            placeholder="Enter project description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            required
          />
        </div>

        {/* Knowledge Transfer Link */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="knowledgeTransferLink"
          >
            Knowledge Transfer Link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="knowledgeTransferLink"
            type="url"
            placeholder="Enter knowledge transfer link"
            value={knowledgeTransferLink}
            onChange={(e) => setKnowledgeTransferLink(e.target.value)}
            required
          />
        </div>

        {/* Learning Module Link */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="learningModuleLink"
          >
            Learning Module Link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="learningModuleLink"
            type="url"
            placeholder="Enter learning module link"
            value={learningModuleLink}
            onChange={(e) => setLearningModuleLink(e.target.value)}
            required
          />
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="techStack"
          >
            Tech Stack
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="techStack"
            type="text"
            placeholder="Enter tech stack"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            required
          />
        </div>

        {/* Team Members */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="teamMembers"
          >
            Team Members
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="teamMembers"
            type="text"
            placeholder="Search and add team members"
            value={searchTerm}
            onChange={handleInputChange}
          />
          {autocompleteSuggestions.length > 0 && (
            <div className="mt-2 bg-white shadow-md rounded">
              {autocompleteSuggestions}
            </div>
          )}
        </div>

        {/* Selected Team Members */}
        {selectedTeamMembersList.length > 0 && (
          <div className="mb-4">
            <h3 className="text-lg font-bold">Selected Team Members</h3>
            <div>{selectedTeamMembersList}</div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Project
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={gobackto}
          >
            Cancel
          </button>
        </div>
      </form>

      {/* Modal */}
      {showModal && (
        <Modal closeModal={closeModal}>
          <h2 className="text-xl font-bold mb-4">User Details</h2>
          {userDetails}
        </Modal>
      )}
    </div>
  );
};

export default UpdateProject;
