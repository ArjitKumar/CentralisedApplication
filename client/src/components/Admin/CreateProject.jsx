// import React, { useState, useEffect } from "react";

// const CreateProjectForm = () => {
//   const [projectName, setProjectName] = useState("");
//   const [projectDescription, setProjectDescription] = useState("");
//   const [knowledgeTransferLink, setKnowledgeTransferLink] = useState("");
//   const [learningModuleLink, setLearningModuleLink] = useState("");
//   const [techStack, setTechStack] = useState("");
//   const [managerId, setManagerId] = useState("");
//   const [teamMembers, setTeamMembers] = useState([
//     { name: "", role: "", employeeId: "" },
//   ]);
//   const [employeeList, setEmployeeList] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await fetch("https://localhost:7221/api/Employee");
//         if (!response.ok) {
//           throw new Error("Failed to fetch employees");
//         }
//         const data = await response.json();
//         setEmployeeList(data);
//       } catch (error) {
//         console.error("Error fetching employees:", error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   const handleAddMember = () => {
//     setTeamMembers([...teamMembers, { name: "", role: "", employeeId: "" }]);
//   };

//   const handleChangeMember = (index, event) => {
//     const updatedTeamMembers = [...teamMembers];
//     updatedTeamMembers[index][event.target.name] = event.target.value;
//     setTeamMembers(updatedTeamMembers);
//   };

//   const handleEmployeeSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSelectEmployee = (index, employeeId, employeeName) => {
//     const updatedTeamMembers = [...teamMembers];
//     updatedTeamMembers[index].employeeId = employeeId;
//     updatedTeamMembers[index].name = employeeName;
//     setTeamMembers(updatedTeamMembers);
//     setSearchTerm("");
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const projectData = {
//       projectName,
//       projectDescription,
//       knowledgeTransferLink,
//       learningModuleLink,
//       techStack,
//       managerId,
//       teamMembers: teamMembers.map((member) => ({
//         employeeId: member.employeeId,
//         role: member.role,
//       })),
//     };
//     console.log(projectData);
//     try {
//       const response = await fetch("https://localhost:7221/api/Project", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(projectData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create project");
//       }

//       // Handle success
//       console.log("Project created successfully!");
//       // Optionally, reset form fields or redirect
//     } catch (error) {
//       console.error("Error creating project:", error);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label
//               htmlFor="projectName"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Project Name
//             </label>
//             <input
//               type="text"
//               id="projectName"
//               name="projectName"
//               value={projectName}
//               onChange={(e) => setProjectName(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="projectDescription"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Project Description
//             </label>
//             <input
//               type="text"
//               id="projectDescription"
//               name="projectDescription"
//               value={projectDescription}
//               onChange={(e) => setProjectDescription(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//               required
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label
//               htmlFor="knowledgeTransferLink"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Knowledge Transfer Link
//             </label>
//             <input
//               type="url"
//               id="knowledgeTransferLink"
//               name="knowledgeTransferLink"
//               value={knowledgeTransferLink}
//               onChange={(e) => setKnowledgeTransferLink(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="learningModuleLink"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Learning Module Link
//             </label>
//             <input
//               type="url"
//               id="learningModuleLink"
//               name="learningModuleLink"
//               value={learningModuleLink}
//               onChange={(e) => setLearningModuleLink(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//               required
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label
//               htmlFor="techStack"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Tech Stack
//             </label>
//             <input
//               type="text"
//               id="techStack"
//               name="techStack"
//               value={techStack}
//               onChange={(e) => setTechStack(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="managerId"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Manager ID (from session storage)
//             </label>
//             <input
//               type="text"
//               id="managerId"
//               name="managerId"
//               value={managerId}
//               onChange={(e) => setManagerId(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//               required
//               disabled // Disable editing for manager ID (from session storage)
//             />
//           </div>
//         </div>

//         <div className="mt-4">
//           <h3 className="text-lg font-medium text-gray-900">Team Members</h3>
//           {teamMembers.map((member, index) => (
//             <div key={index} className="grid grid-cols-2 gap-4 mt-2">
//               <div>
//                 <label
//                   htmlFor={`memberName${index}`}
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Member Name
//                 </label>
//                 <input
//                   type="text"
//                   id={`memberName${index}`}
//                   name="name"
//                   value={member.name}
//                   onChange={(e) => handleChangeMember(index, e)}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//                   required
//                   list="employees"
//                 />
//                 <datalist id="employees">
//                   {employeeList
//                     .filter((emp) =>
//                       emp.firstName
//                         .toLowerCase()
//                         .includes(searchTerm.toLowerCase())
//                     )
//                     .map((emp) => (
//                       <option
//                         key={emp.id}
//                         value={`${emp.firstName} ${emp.lastName}`}
//                       />
//                     ))}
//                 </datalist>
//               </div>
//               <div>
//                 <label
//                   htmlFor={`memberRole${index}`}
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Member Role
//                 </label>
//                 <input
//                   type="text"
//                   id={`memberRole${index}`}
//                   name="role"
//                   value={member.role}
//                   onChange={(e) => handleChangeMember(index, e)}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//                   required
//                 />
//               </div>
//             </div>
//           ))}
//           <button
//             type="button"
//             className="inline-flex items-center px-4 py-2 border border-transparent text-xs font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             onClick={handleAddMember}
//           >
//             Add Team Member
//           </button>
//         </div>

//         <div className="mt-4">
//           <button
//             type="submit"
//             className="inline-flex items-center px-4 py-2 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700             focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Create Project
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateProjectForm;

// import React, { useState, useEffect } from "react";
// import Modal from "../UpdateUserDetails/Modal"; // Assuming Modal component is defined in Modal.js

// const CreateProjectForm = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null); // State to store selected user details
//   const [users, setUsers] = useState([]); // State to store users fetched from backend
//   const [selectedTeamMembers, setSelectedTeamMembers] = useState([]); // State to store selected team members
//   const [searchTerm, setSearchTerm] = useState(""); // State to store search term for autocomplete
//   const [autocompleteUsers, setAutocompleteUsers] = useState([]); // State to store users for autocomplete

//   useEffect(() => {
//     // Fetch users from backend API
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch("https://localhost:7221/api/Employee");
//         if (!response.ok) {
//           throw new Error("Failed to fetch users");
//         }
//         const data = await response.json();
//         setUsers(data); // Store fetched users in state
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Function to handle modal open and close
//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);

//   // Function to handle selecting a user from autocomplete
//   const handleSelectUser = (user) => {
//     setSelectedUser(user);
//     openModal();
//   };

//   // Function to add selected user as a team member
//   const addTeamMember = () => {
//     setSelectedTeamMembers([...selectedTeamMembers, selectedUser]);
//     closeModal();
//   };

//   // Function to remove a team member from selectedTeamMembers
//   const removeTeamMember = (userId) => {
//     const updatedTeamMembers = selectedTeamMembers.filter(
//       (user) => user.id !== userId
//     );
//     setSelectedTeamMembers(updatedTeamMembers);
//   };

//   // Function to handle input change in autocomplete
//   const handleInputChange = (e) => {
//     const searchTerm = e.target.value;
//     setSearchTerm(searchTerm);

//     // Filter users based on input
//     const filteredUsers = users.filter((user) =>
//       `${user.firstName} ${user.lastName}`
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase())
//     );
//     setAutocompleteUsers(filteredUsers);
//   };

//   // Display autocomplete suggestions
//   const autocompleteSuggestions = autocompleteUsers.map((user) => (
//     <div
//       key={user.id}
//       className="cursor-pointer hover:bg-gray-200 p-2"
//       onClick={() => handleSelectUser(user)}
//     >
//       {user.firstName} {user.lastName}
//     </div>
//   ));

//   // Example user details
//   const userDetails = selectedUser ? (
//     <div>
//       <p>
//         <strong>Name:</strong> {selectedUser.firstName} {selectedUser.lastName}
//       </p>
//       <p>
//         <strong>Email:</strong> {selectedUser.email}
//       </p>
//       <p>
//         <strong>Role:</strong> {selectedUser.role}
//       </p>
//       <p>
//         <strong>Phone:</strong> {selectedUser.phone}
//       </p>
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
//         onClick={addTeamMember}
//       >
//         Add as Team Member
//       </button>
//     </div>
//   ) : null;

//   // Display selected team members
//   const selectedTeamMembersList = selectedTeamMembers.map((member) => (
//     <div
//       key={member.id}
//       className="flex items-center justify-between border-b border-gray-200 py-2"
//     >
//       <p>
//         {member.firstName} {member.lastName}
//       </p>
//       <button
//         className="text-red-500 hover:text-red-700 focus:outline-none"
//         onClick={() => removeTeamMember(member.id)}
//       >
//         Remove
//       </button>
//     </div>
//   ));

//   return (
//     <div className="container mx-auto mt-8">
//       {/* Project Form */}
//       <form className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         {/* Project Name */}
//         <h1 className="text-2xl font-bold mb-4">Create Project</h1>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="projectName"
//           >
//             Project Name
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="projectName"
//             type="text"
//             placeholder="Enter project name"
//           />
//         </div>

//         {/* Project Description */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="projectDescription"
//           >
//             Project Description
//           </label>
//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="projectDescription"
//             placeholder="Enter project description"
//           />
//         </div>

//         {/* Knowledge Transfer Link */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="knowledgeTransferLink"
//           >
//             Knowledge Transfer Link
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="knowledgeTransferLink"
//             type="text"
//             placeholder="Enter knowledge transfer link"
//           />
//         </div>

//         {/* Learning Module Link */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="learningModuleLink"
//           >
//             Learning Module Link
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="learningModuleLink"
//             type="text"
//             placeholder="Enter learning module link"
//           />
//         </div>

//         {/* Tech Stack */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="techStack"
//           >
//             Tech Stack
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="techStack"
//             type="text"
//             placeholder="Enter tech stack"
//           />
//         </div>

//         {/* Manager ID - Hidden Input */}
//         <input
//           type="hidden"
//           id="managerId"
//           value={sessionStorage.getItem("userId")}
//         />

//         {/* Team Members Autocomplete */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="teamMembers"
//           >
//             Team Members
//           </label>
//           <input
//             className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="teamMembers"
//             type="text"
//             placeholder="Search team members"
//             value={searchTerm}
//             onChange={handleInputChange}
//           />
//           {/* Autocomplete Suggestions */}
//           {autocompleteSuggestions.length > 0 && (
//             <div className="mt-1 bg-white shadow-md rounded">
//               {autocompleteSuggestions}
//             </div>
//           )}
//         </div>

//         {/* Selected Team Members */}
//         <div className="mb-4">
//           <div className="border border-gray-300 rounded p-2">
//             {selectedTeamMembersList.length > 0 ? (
//               <div>{selectedTeamMembersList}</div>
//             ) : (
//               <p>No team members selected</p>
//             )}
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Create Project
//           </button>
//         </div>
//       </form>

//       {/* Modal component */}
//       {showModal && (
//         <Modal closeModal={closeModal}>
//           <div className="p-4">
//             <h2 className="text-lg font-bold mb-4">User Details</h2>
//             {userDetails}
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default CreateProjectForm;

// --------------------------- Currently working -----------------------------------
// import React, { useState, useEffect } from "react";
// import Modal from "../UpdateUserDetails/Modal"; // Assuming Modal component is defined in Modal.js

// const CreateProjectForm = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null); // State to store selected user details
//   const [users, setUsers] = useState([]); // State to store users fetched from backend
//   const [selectedTeamMembers, setSelectedTeamMembers] = useState([]); // State to store selected team members
//   const [searchTerm, setSearchTerm] = useState(""); // State to store search term for autocomplete
//   const [autocompleteUsers, setAutocompleteUsers] = useState([]); // State to store users for autocomplete

//   useEffect(() => {
//     // Fetch users from backend API
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch("https://localhost:7221/api/Employee");
//         if (!response.ok) {
//           throw new Error("Failed to fetch users");
//         }
//         const data = await response.json();
//         setUsers(data); // Store fetched users in state
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Function to handle modal open and close
//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);

//   // Function to handle selecting a user from autocomplete
//   const handleSelectUser = (user) => {
//     setSelectedUser(user);
//     openModal();
//   };

//   // Function to add selected user as a team member
//   const addTeamMember = () => {
//     setSelectedTeamMembers([...selectedTeamMembers, selectedUser]);
//     closeModal();
//   };

//   // Function to remove a team member from selectedTeamMembers
//   const removeTeamMember = (userId) => {
//     const updatedTeamMembers = selectedTeamMembers.filter(
//       (user) => user.id !== userId
//     );
//     setSelectedTeamMembers(updatedTeamMembers);
//   };

//   // Function to handle input change in autocomplete
//   const handleInputChange = (e) => {
//     const searchTerm = e.target.value;
//     setSearchTerm(searchTerm);

//     // Filter users based on input
//     const filteredUsers = users.filter((user) =>
//       `${user.firstName} ${user.lastName}`
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase())
//     );
//     setAutocompleteUsers(filteredUsers);
//   };

//   // Display autocomplete suggestions
//   const autocompleteSuggestions = autocompleteUsers.map((user) => (
//     <div
//       key={user.id}
//       className="cursor-pointer hover:bg-gray-200 p-2"
//       onClick={() => handleSelectUser(user)}
//     >
//       {user.firstName} {user.lastName}
//     </div>
//   ));

//   // Example user details
//   const userDetails = selectedUser ? (
//     <div>
//       <p>
//         <strong>Name:</strong> {selectedUser.firstName} {selectedUser.lastName}
//       </p>
//       <p>
//         <strong>Email:</strong> {selectedUser.email}
//       </p>
//       <p>
//         <strong>Role:</strong> {selectedUser.role}
//       </p>
//       <p>
//         <strong>Phone:</strong> {selectedUser.phone}
//       </p>
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
//         onClick={addTeamMember}
//       >
//         Add as Team Member
//       </button>
//     </div>
//   ) : null;

//   // Display selected team members
//   const selectedTeamMembersList = selectedTeamMembers.map((member) => (
//     <div
//       key={member.id}
//       className="flex items-center justify-between border-b border-gray-200 py-2"
//     >
//       <p>
//         {member.firstName} {member.lastName}
//       </p>
//       <button
//         className="text-red-500 hover:text-red-700 focus:outline-none"
//         onClick={() => removeTeamMember(member.id)}
//       >
//         Remove
//       </button>
//     </div>
//   ));

//   return (
//     <div className="container mx-auto mt-8">
//       {/* Project Form */}
//       <form className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         {/* Project Name */}
//         <h1 className="text-2xl font-bold mb-4">Create Project</h1>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="projectName"
//           >
//             Project Name
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="projectName"
//             type="text"
//             placeholder="Enter project name"
//           />
//         </div>

//         {/* Project Description */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="projectDescription"
//           >
//             Project Description
//           </label>
//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="projectDescription"
//             placeholder="Enter project description"
//           />
//         </div>

//         {/* Knowledge Transfer Link */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="knowledgeTransferLink"
//           >
//             Knowledge Transfer Link
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="knowledgeTransferLink"
//             type="text"
//             placeholder="Enter knowledge transfer link"
//           />
//         </div>

//         {/* Learning Module Link */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="learningModuleLink"
//           >
//             Learning Module Link
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="learningModuleLink"
//             type="text"
//             placeholder="Enter learning module link"
//           />
//         </div>

//         {/* Tech Stack */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="techStack"
//           >
//             Tech Stack
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="techStack"
//             type="text"
//             placeholder="Enter tech stack"
//           />
//         </div>

//         {/* Manager ID - Hidden Input */}
//         <input
//           type="hidden"
//           id="managerId"
//           value={sessionStorage.getItem("userId")}
//         />

//         {/* Team Members Autocomplete */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="teamMembers"
//           >
//             Team Members
//           </label>
//           <input
//             className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="teamMembers"
//             type="text"
//             placeholder="Search team members"
//             value={searchTerm}
//             onChange={handleInputChange}
//           />
//           {/* Autocomplete Suggestions */}
//           {autocompleteSuggestions.length > 0 && searchTerm.length > 0 && (
//             <div className="mt-1 bg-white shadow-md rounded">
//               {autocompleteSuggestions}
//             </div>
//           )}
//         </div>

//         {/* Selected Team Members */}
//         <div className="mb-4">
//           <div className="border border-gray-300 rounded p-2">
//             {selectedTeamMembersList.length > 0 ? (
//               <div>{selectedTeamMembersList}</div>
//             ) : (
//               <p>No team members selected</p>
//             )}
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Create Project
//           </button>
//         </div>
//       </form>

//       {/* Modal component */}
//       {showModal && (
//         <Modal closeModal={closeModal}>
//           <div className="p-4">
//             <h2 className="text-lg font-bold mb-4">User Details</h2>
//             {userDetails}
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default CreateProjectForm;

// ----------------------- 4th code =------------------------------
// import React, { useState, useEffect } from "react";
// import Modal from "../UpdateUserDetails/Modal"; // Assuming Modal component is defined in Modal.js

// const CreateProjectForm = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null); // State to store selected user details
//   const [users, setUsers] = useState([]); // State to store users fetched from backend
//   const [selectedTeamMembers, setSelectedTeamMembers] = useState([]); // State to store selected team members
//   const [searchTerm, setSearchTerm] = useState(""); // State to store search term for autocomplete
//   const [autocompleteUsers, setAutocompleteUsers] = useState([]); // State to store users for autocomplete

//   useEffect(() => {
//     // Fetch users from backend API
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch("https://localhost:7221/api/Employee");
//         if (!response.ok) {
//           throw new Error("Failed to fetch users");
//         }
//         const data = await response.json();
//         setUsers(data); // Store fetched users in state
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Function to handle modal open and close
//   const openModal = () => setShowModal(true);
//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedUser(null); // Reset selectedUser when closing modal
//   };

//   // Function to handle selecting a user from autocomplete
//   const handleSelectUser = (user) => {
//     setSelectedUser(user);
//     openModal();
//   };

//   // Function to add selected user as a team member
//   const addTeamMember = () => {
//     setSelectedTeamMembers([...selectedTeamMembers, selectedUser]);
//     closeModal();
//   };

//   // Function to remove a team member from selectedTeamMembers
//   const removeTeamMember = (userId) => {
//     const updatedTeamMembers = selectedTeamMembers.filter(
//       (user) => user.id !== userId
//     );
//     setSelectedTeamMembers(updatedTeamMembers);
//   };

//   // Function to handle input change in autocomplete
//   const handleInputChange = (e) => {
//     const searchTerm = e.target.value;
//     setSearchTerm(searchTerm);

//     // Filter users based on input
//     const filteredUsers = users.filter((user) =>
//       `${user.firstName} ${user.lastName}`
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase())
//     );
//     setAutocompleteUsers(filteredUsers);
//   };

//   // Display autocomplete suggestions
//   const autocompleteSuggestions = autocompleteUsers.map((user) => (
//     <div
//       key={user.id}
//       className="cursor-pointer hover:bg-gray-200 p-2"
//       onClick={() => handleSelectUser(user)}
//     >
//       {user.firstName} {user.lastName}
//     </div>
//   ));

//   // Example user details
//   const userDetails = selectedUser ? (
//     <div>
//       <p>
//         <strong>Name:</strong> {selectedUser.firstName} {selectedUser.lastName}
//       </p>
//       <p>
//         <strong>Email:</strong> {selectedUser.email}
//       </p>
//       <p>
//         <strong>Role:</strong> {selectedUser.role}
//       </p>
//       <p>
//         <strong>Phone:</strong> {selectedUser.phone}
//       </p>
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
//         onClick={addTeamMember}
//       >
//         Add as Team Member
//       </button>
//     </div>
//   ) : null;

//   // Display selected team members
//   const selectedTeamMembersList = selectedTeamMembers.map((member) => (
//     <div
//       key={member.id}
//       className="flex items-center justify-between border-b border-gray-200 py-2"
//     >
//       <p>
//         {member.firstName} {member.lastName}
//       </p>
//       <button
//         className="text-red-500 hover:text-red-700 focus:outline-none"
//         onClick={() => removeTeamMember(member.id)}
//       >
//         Remove
//       </button>
//     </div>
//   ));

//   return (
//     <div className="container mx-auto mt-8">
//       {/* Project Form */}
//       <form className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         {/* Project Name */}
//         <h1 className="text-2xl font-bold mb-4">Create Project</h1>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="projectName"
//           >
//             Project Name
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="projectName"
//             type="text"
//             placeholder="Enter project name"
//           />
//         </div>

//         {/* Project Description */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="projectDescription"
//           >
//             Project Description
//           </label>
//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="projectDescription"
//             placeholder="Enter project description"
//           />
//         </div>

//         {/* Knowledge Transfer Link */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="knowledgeTransferLink"
//           >
//             Knowledge Transfer Link
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="knowledgeTransferLink"
//             type="text"
//             placeholder="Enter knowledge transfer link"
//           />
//         </div>

//         {/* Learning Module Link */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="learningModuleLink"
//           >
//             Learning Module Link
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="learningModuleLink"
//             type="text"
//             placeholder="Enter learning module link"
//           />
//         </div>

//         {/* Tech Stack */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="techStack"
//           >
//             Tech Stack
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="techStack"
//             type="text"
//             placeholder="Enter tech stack"
//           />
//         </div>

//         {/* Manager ID - Hidden Input */}
//         <input
//           type="hidden"
//           id="managerId"
//           value={sessionStorage.getItem("userId")}
//         />

//         {/* Team Members Autocomplete */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="teamMembers"
//           >
//             Team Members
//           </label>
//           <input
//             className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="teamMembers"
//             type="text"
//             placeholder="Search team members"
//             value={searchTerm}
//             onChange={handleInputChange}
//           />
//           {/* Autocomplete Suggestions */}
//           {autocompleteSuggestions.length > 0 && searchTerm.length > 0 && (
//             <div className="mt-1 bg-white shadow-md rounded">
//               {autocompleteSuggestions}
//             </div>
//           )}
//         </div>

//         {/* Selected Team Members */}
//         <div className="mb-4">
//           <div className="border border-gray-300 rounded p-2">
//             {selectedTeamMembersList.length > 0 ? (
//               <div>{selectedTeamMembersList}</div>
//             ) : (
//               <p>No team members selected</p>
//             )}
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Create Project
//           </button>
//         </div>
//       </form>

//       {/* Modal component */}
//       {showModal && (
//         <Modal closeModal={closeModal}>
//           <div className="p-4">
//             <h2 className="text-lg font-bold mb-4">User Details</h2>
//             {userDetails}
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default CreateProjectForm;

// ------------------------- 5th code ------------------------

// import React, { useState, useEffect } from "react";
// import Modal from "../UpdateUserDetails/Modal"; // Assuming Modal component is defined in Modal.js

// const CreateProject = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null); // State to store selected user details
//   const [users, setUsers] = useState([]); // State to store users fetched from backend
//   const [selectedTeamMembers, setSelectedTeamMembers] = useState([]); // State to store selected team members
//   const [searchTerm, setSearchTerm] = useState(""); // State to store search term for autocomplete
//   const [autocompleteUsers, setAutocompleteUsers] = useState([]); // State to store users for autocomplete

//   useEffect(() => {
//     // Fetch users from backend API
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch("https://localhost:7221/api/Employee");
//         if (!response.ok) {
//           throw new Error("Failed to fetch users");
//         }
//         const data = await response.json();
//         setUsers(data); // Store fetched users in state
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Function to handle modal open and close
//   const openModal = () => setShowModal(true);
//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedUser(null); // Reset selectedUser when closing modal
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Debug: Log form input values before creating sanitizedProjectData
//     console.log("knowledgeTransferLink:", knowledgeTransferLink);
//     console.log("learningModuleLink:", learningModuleLink);
//     console.log("projectDescription:", projectDescription);
//     console.log("techStack:", techStack);
//     console.log("projectName:", projectName);

//     // Ensure form inputs are properly initialized and trimmed
//     const sanitizedProjectData = {
//       projectName: projectName,
//       projectDescription: projectDescription,
//       knowledgeTransferLink: knowledgeTransferLink,
//       learningModuleLink: learningModuleLink,
//       techStack: techStack,
//       managerId: sessionStorage.getItem("userId"),
//       teamMembers: selectedTeamMembers.map((member) => ({
//         employeeId: member.id,
//         employeeName: `${member.firstName} ${member.lastName}`,
//         employeeRole: member.role,
//         employeeEmail: member.email,
//       })),
//     };

//     console.log("sanitizedProjectData:", sanitizedProjectData);

//     try {
//       // Send project data to backend
//       const response = await fetch("https://localhost:7221/projects", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(sanitizedProjectData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create project");
//       }

//       const responseData = await response.json();
//       console.log("Project created successfully:", responseData);
//       // Optionally, reset form or provide feedback to the user
//     } catch (error) {
//       // Handle error
//       console.error("Error creating project:", error);
//       // Provide error feedback to the user
//     }
//   };

//   // Function to handle selecting a user from autocomplete
//   const handleSelectUser = (user) => {
//     setSelectedUser(user);
//     openModal();
//   };

//   // Function to add selected user as a team member
//   const addTeamMember = () => {
//     if (
//       !selectedUser ||
//       selectedTeamMembers.some((member) => member.id === selectedUser.id)
//     ) {
//       return; // Prevent adding null or duplicate team members
//     }

//     setSelectedTeamMembers([...selectedTeamMembers, selectedUser]);
//     setSearchTerm(""); // Clear search term
//     setSelectedUser(null); // Reset selectedUser
//     closeModal();
//   };

//   // Function to remove a team member from selectedTeamMembers
//   const removeTeamMember = (userId) => {
//     const updatedTeamMembers = selectedTeamMembers.filter(
//       (user) => user.id !== userId
//     );
//     setSelectedTeamMembers(updatedTeamMembers);
//   };

//   // Function to handle input change in autocomplete
//   const handleInputChange = (e) => {
//     const searchTerm = e.target.value;
//     setSearchTerm(searchTerm);

//     // Filter users based on input
//     const filteredUsers = users.filter((user) =>
//       `${user.firstName} ${user.lastName}`
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase())
//     );
//     setAutocompleteUsers(filteredUsers);
//   };

//   // Display autocomplete suggestions
//   const autocompleteSuggestions = autocompleteUsers.map((user) => (
//     <div
//       key={user.id}
//       className="cursor-pointer hover:bg-gray-200 p-2"
//       onClick={() => handleSelectUser(user)}
//     >
//       {user.firstName} {user.lastName}
//     </div>
//   ));

//   // Example user details
//   const userDetails = selectedUser ? (
//     <div>
//       <p>
//         <strong>Name:</strong> {selectedUser.firstName} {selectedUser.lastName}
//       </p>
//       <p>
//         <strong>Email:</strong> {selectedUser.email}
//       </p>
//       <p>
//         <strong>Role:</strong> {selectedUser.role}
//       </p>
//       <p>
//         <strong>Phone:</strong> {selectedUser.phone}
//       </p>
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
//         onClick={addTeamMember}
//       >
//         Add as Team Member
//       </button>
//     </div>
//   ) : null;

//   // Display selected team members
//   const selectedTeamMembersList = selectedTeamMembers.map((member) => (
//     <div
//       key={member.id}
//       className="flex items-center justify-between border-b border-gray-200 py-2"
//     >
//       <p>
//         {member.firstName} {member.lastName}
//       </p>
//       <button
//         className="text-red-500 hover:text-red-700 focus:outline-none"
//         onClick={() => removeTeamMember(member.id)}
//       >
//         Remove
//       </button>
//     </div>
//   ));

//   return (
//     <div className="container mx-auto mt-8">
//       {/* Project Form */}
//       <form className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         {/* Project Name */}
//         <h1 className="text-2xl font-bold mb-4">Create Project</h1>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="projectName"
//           >
//             Project Name
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="projectName"
//             type="text"
//             placeholder="Enter project name"
//           />
//         </div>

//         {/* Project Description */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="projectDescription"
//           >
//             Project Description
//           </label>
//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="projectDescription"
//             placeholder="Enter project description"
//           />
//         </div>

//         {/* Knowledge Transfer Link */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="knowledgeTransferLink"
//           >
//             Knowledge Transfer Link
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="knowledgeTransferLink"
//             type="text"
//             placeholder="Enter knowledge transfer link"
//           />
//         </div>

//         {/* Learning Module Link */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="learningModuleLink"
//           >
//             Learning Module Link
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="learningModuleLink"
//             type="text"
//             placeholder="Enter learning module link"
//           />
//         </div>

//         {/* Tech Stack */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="techStack"
//           >
//             Tech Stack
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="techStack"
//             type="text"
//             placeholder="Enter tech stack"
//           />
//         </div>

//         {/* Manager ID - Hidden Input */}
//         <input
//           type="hidden"
//           id="managerId"
//           value={sessionStorage.getItem("userId")}
//         />

//         {/* Team Members Autocomplete */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="teamMembers"
//           >
//             Team Members
//           </label>
//           <input
//             className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="teamMembers"
//             type="text"
//             placeholder="Search team members"
//             value={searchTerm}
//             onChange={handleInputChange}
//           />
//           {/* Autocomplete Suggestions */}
//           {autocompleteSuggestions.length > 0 && searchTerm.length > 0 && (
//             <div className="mt-1 bg-white shadow-md rounded">
//               {autocompleteSuggestions}
//             </div>
//           )}
//         </div>

//         {/* Selected Team Members */}
//         <div className="mb-4">
//           <div className="border border-gray-300 rounded p-2">
//             {selectedTeamMembersList.length > 0 ? (
//               <div>{selectedTeamMembersList}</div>
//             ) : (
//               <p>No team members selected</p>
//             )}
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="flex items-center justify-between">
//           <button
//             onClick={handleSubmit}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Create Project
//           </button>
//         </div>
//       </form>

//       {/* Modal component */}
//       {showModal && (
//         <Modal closeModal={closeModal}>
//           <div className="p-4">
//             <h2 className="text-lg font-bold mb-4">User Details</h2>
//             {userDetails}
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default CreateProject;

// //----------------------------------- 6th attemp ----------------------------------

// import React, { useState, useEffect } from "react";
// import Modal from "../UpdateUserDetails/Modal"; // Assuming Modal component is defined in Modal.js

// const CreateProject = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null); // State to store selected user details
//   const [users, setUsers] = useState([]); // State to store users fetched from backend
//   const [selectedTeamMembers, setSelectedTeamMembers] = useState([]); // State to store selected team members
//   const [searchTerm, setSearchTerm] = useState(""); // State to store search term for autocomplete
//   const [autocompleteUsers, setAutocompleteUsers] = useState([]); // State to store users for autocomplete
//   const [projectName, setProjectName] = useState("");
//   const [projectDescription, setProjectDescription] = useState("");
//   const [knowledgeTransferLink, setKnowledgeTransferLink] = useState("");
//   const [learningModuleLink, setLearningModuleLink] = useState("");
//   const [techStack, setTechStack] = useState("");

//   useEffect(() => {
//     // Fetch users from backend API
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch("https://localhost:7221/api/Employee");
//         if (!response.ok) {
//           throw new Error("Failed to fetch users");
//         }
//         const data = await response.json();
//         setUsers(data); // Store fetched users in state
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Function to handle modal open and close
//   const openModal = () => setShowModal(true);
//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedUser(null); // Reset selectedUser when closing modal
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Prepare project data
//     const projectData = {
//       projectName,
//       projectDescription,
//       knowledgeTransferLink,
//       learningModuleLink,
//       techStack,
//       managerId: sessionStorage.getItem("userId"),
//       teamMembers: selectedTeamMembers.map((member) => member.id),
//     };
//     console.log(projectData);
//     try {
//       // Send project data to backend
//       //   const response = await axios.post(
//       //     "https://localhost:7221/projects",
//       //     projectData
//       //   );

//       console.log("Project created successfully:", response.data);
//       // Optionally, reset form or provide feedback to the user
//     } catch (error) {
//       // Handle error
//       console.error("Error creating project:", error);
//       // Provide error feedback to the user
//     }
//   };

//   // Function to handle selecting a user from autocomplete
//   const handleSelectUser = (user) => {
//     setSelectedUser(user);
//     openModal();
//   };

//   // Function to add selected user as a team member
//   const addTeamMember = () => {
//     if (
//       !selectedUser ||
//       selectedTeamMembers.some((member) => member.id === selectedUser.id)
//     ) {
//       return; // Prevent adding null or duplicate team members
//     }

//     setSelectedTeamMembers([...selectedTeamMembers, selectedUser]);
//     setSearchTerm(""); // Clear search term
//     setSelectedUser(null); // Reset selectedUser
//     closeModal();
//   };

//   // Function to remove a team member from selectedTeamMembers
//   const removeTeamMember = (userId) => {
//     const updatedTeamMembers = selectedTeamMembers.filter(
//       (user) => user.id !== userId
//     );
//     setSelectedTeamMembers(updatedTeamMembers);
//   };

//   // Function to handle input change in autocomplete
//   const handleInputChange = (e) => {
//     const searchTerm = e.target.value;
//     setSearchTerm(searchTerm);

//     // Filter users based on input
//     const filteredUsers = users.filter((user) =>
//       `${user.firstName} ${user.lastName}`
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase())
//     );
//     setAutocompleteUsers(filteredUsers);
//   };

//   // Display autocomplete suggestions
//   const autocompleteSuggestions = autocompleteUsers.map((user) => (
//     <div
//       key={user.id}
//       className="cursor-pointer hover:bg-gray-200 p-2"
//       onClick={() => handleSelectUser(user)}
//     >
//       {user.firstName} {user.lastName}
//     </div>
//   ));

//   // Example user details
//   const userDetails = selectedUser ? (
//     <div>
//       <p>
//         <strong>Name:</strong> {selectedUser.firstName} {selectedUser.lastName}
//       </p>
//       <p>
//         <strong>Email:</strong> {selectedUser.email}
//       </p>
//       <p>
//         <strong>Role:</strong> {selectedUser.role}
//       </p>
//       <p>
//         <strong>Phone:</strong> {selectedUser.phone}
//       </p>
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
//         onClick={addTeamMember}
//       >
//         Add as Team Member
//       </button>
//     </div>
//   ) : null;

//   // Display selected team members
//   const selectedTeamMembersList = selectedTeamMembers.map((member) => (
//     <div
//       key={member.id}
//       className="flex items-center justify-between border-b border-gray-200 py-2"
//     >
//       <p>
//         {member.firstName} {member.lastName}
//       </p>
//       <button
//         className="text-red-500 hover:text-red-700 focus:outline-none"
//         onClick={() => removeTeamMember(member.id)}
//       >
//         Remove
//       </button>
//     </div>
//   ));

//   return (
//     <div className="container mx-auto mt-8">
//       {/* Project Form */}
//       <form
//         className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//         onSubmit={handleSubmit}
//       >
//         {/* Project Name */}
//         <h1 className="text-2xl font-bold mb-4">Create Project</h1>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="projectName"
//           >
//             Project Name
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="projectName"
//             type="text"
//             placeholder="Enter project name"
//             value={projectName}
//             onChange={(e) => setProjectName(e.target.value)}
//           />
//         </div>

//         {/* Project Description */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="projectDescription"
//           >
//             Project Description
//           </label>
//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="projectDescription"
//             placeholder="Enter project description"
//             value={projectDescription}
//             onChange={(e) => setProjectDescription(e.target.value)}
//           />
//         </div>

//         {/* Knowledge Transfer Link */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="knowledgeTransferLink"
//           >
//             Knowledge Transfer Link
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="knowledgeTransferLink"
//             type="text"
//             placeholder="Enter knowledge transfer link"
//             value={knowledgeTransferLink}
//             onChange={(e) => setKnowledgeTransferLink(e.target.value)}
//           />
//         </div>

//         {/* Learning Module Link */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="learningModuleLink"
//           >
//             Learning Module Link
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="learningModuleLink"
//             type="text"
//             placeholder="Enter learning module link"
//             value={learningModuleLink}
//             onChange={(e) => setLearningModuleLink(e.target.value)}
//           />
//         </div>

//         {/* Tech Stack */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="techStack"
//           >
//             Tech Stack
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="techStack"
//             type="text"
//             placeholder="Enter tech stack"
//             value={techStack}
//             onChange={(e) => setTechStack(e.target.value)}
//           />
//         </div>

//         {/* Manager ID - Hidden Input */}
//         <input
//           type="hidden"
//           id="managerId"
//           value={sessionStorage.getItem("userId")}
//         />

//         {/* Team Members Autocomplete */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="teamMembers"
//           >
//             Team Members
//           </label>
//           <input
//             className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="teamMembers"
//             type="text"
//             placeholder="Search team members"
//             value={searchTerm}
//             onChange={handleInputChange}
//           />
//           {/* Autocomplete Suggestions */}
//           {autocompleteSuggestions.length > 0 && searchTerm.length > 0 && (
//             <div className="mt-1 bg-white shadow-md rounded">
//               {autocompleteSuggestions}
//             </div>
//           )}
//         </div>

//         {/* Selected Team Members */}
//         <div className="mb-4">
//           <div className="border border-gray-300 rounded p-2">
//             {selectedTeamMembersList.length > 0 ? (
//               <div>{selectedTeamMembersList}</div>
//             ) : (
//               <p>No team members selected</p>
//             )}
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Create Project
//           </button>
//         </div>
//       </form>

//       {/* Modal component */}
//       {showModal && (
//         <Modal closeModal={closeModal}>
//           <div className="p-4">
//             <h2 className="text-lg font-bold mb-4">User Details</h2>
//             {userDetails}
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default CreateProject;

// ------------------------ 7th ------------------------------------

// import React, { useState, useEffect } from "react";
// import Modal from "../UpdateUserDetails/Modal"; // Assuming Modal component is defined in Modal.js

// const CreateProject = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null); // State to store selected user details
//   const [users, setUsers] = useState([]); // State to store users fetched from backend
//   const [selectedTeamMembers, setSelectedTeamMembers] = useState([]); // State to store selected team members
//   const [searchTerm, setSearchTerm] = useState(""); // State to store search term for autocomplete
//   const [autocompleteUsers, setAutocompleteUsers] = useState([]); // State to store users for autocomplete

//   const [projectName, setProjectName] = useState(""); // State for project name
//   const [projectDescription, setProjectDescription] = useState(""); // State for project description
//   const [knowledgeTransferLink, setKnowledgeTransferLink] = useState(""); // State for knowledge transfer link
//   const [learningModuleLink, setLearningModuleLink] = useState(""); // State for learning module link
//   const [techStack, setTechStack] = useState(""); // State for tech stack

//   useEffect(() => {
//     // Fetch users from backend API
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch("https://localhost:7221/api/Employee");
//         if (!response.ok) {
//           throw new Error("Failed to fetch users");
//         }
//         const data = await response.json();
//         setUsers(data); // Store fetched users in state
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Function to handle modal open and close
//   const openModal = () => setShowModal(true);
//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedUser(null); // Reset selectedUser when closing modal
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const sanitizedProjectData = {
//       projectName: projectName,
//       projectDescription: projectDescription,
//       knowledgeTransferLink: knowledgeTransferLink,
//       learningModuleLink: learningModuleLink,
//       techStack: techStack,
//       managerId: sessionStorage.getItem("userId"),
//       teamMembers: selectedTeamMembers.map((member) => ({
//         employeeId: member.id,
//         employeeName: `${member.firstName} ${member.lastName}`,
//         employeeRole: member.role,
//         employeeEmail: member.email,
//       })),
//     };

//     console.log("sanitizedProjectData:", sanitizedProjectData);

//     try {
//       // Send project data to backend
//       const response = await fetch("https://localhost:7221/projects", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(sanitizedProjectData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create project");
//       }

//       const responseData = await response.json();
//       console.log("Project created successfully:", responseData);
//       // Optionally, reset form or provide feedback to the user
//       resetForm(); // Reset form after successful submission
//     } catch (error) {
//       // Handle error
//       console.error("Error creating project:", error);
//       // Provide error feedback to the user
//     }
//   };

//   // Function to reset form fields after successful submission
//   const resetForm = () => {
//     setProjectName("");
//     setProjectDescription("");
//     setKnowledgeTransferLink("");
//     setLearningModuleLink("");
//     setTechStack("");
//     setSelectedTeamMembers([]);
//   };

//   // Function to handle selecting a user from autocomplete
//   const handleSelectUser = (user) => {
//     setSelectedUser(user);
//     openModal();
//   };

//   // Function to add selected user as a team member
//   const addTeamMember = () => {
//     if (
//       !selectedUser ||
//       selectedTeamMembers.some((member) => member.id === selectedUser.id)
//     ) {
//       return; // Prevent adding null or duplicate team members
//     }

//     setSelectedTeamMembers([...selectedTeamMembers, selectedUser]);
//     setSearchTerm(""); // Clear search term
//     setSelectedUser(null); // Reset selectedUser
//     closeModal();
//   };

//   // Function to remove a team member from selectedTeamMembers
//   const removeTeamMember = (userId) => {
//     const updatedTeamMembers = selectedTeamMembers.filter(
//       (user) => user.id !== userId
//     );
//     setSelectedTeamMembers(updatedTeamMembers);
//   };

//   // Function to handle input change in autocomplete
//   const handleInputChange = (e) => {
//     const searchTerm = e.target.value;
//     setSearchTerm(searchTerm);

//     // Filter users based on input
//     const filteredUsers = users.filter((user) =>
//       `${user.firstName} ${user.lastName}`
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase())
//     );
//     setAutocompleteUsers(filteredUsers);
//   };

//   // Display autocomplete suggestions
//   const autocompleteSuggestions = autocompleteUsers.map((user) => (
//     <div
//       key={user.id}
//       className="cursor-pointer hover:bg-gray-200 p-2"
//       onClick={() => handleSelectUser(user)}
//     >
//       {user.firstName} {user.lastName}
//     </div>
//   ));

//   // Example user details
//   const userDetails = selectedUser ? (
//     <div>
//       <p>
//         <strong>Name:</strong> {selectedUser.firstName} {selectedUser.lastName}
//       </p>
//       <p>
//         <strong>Email:</strong> {selectedUser.email}
//       </p>
//       <p>
//         <strong>Role:</strong> {selectedUser.role}
//       </p>
//       <p>
//         <strong>Phone:</strong> {selectedUser.phone}
//       </p>
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
//         onClick={addTeamMember}
//       >
//         Add as Team Member
//       </button>
//     </div>
//   ) : null;

//   // Display selected team members
//   const selectedTeamMembersList = selectedTeamMembers.map((member) => (
//     <div
//       key={member.id}
//       className="flex items-center justify-between border-b border-gray-200 py-2"
//     >
//       <p>
//         {member.firstName} {member.lastName}
//       </p>
//       <button
//         className="text-red-500 hover:text-red-700 focus:outline-none"
//         onClick={() => removeTeamMember(member.id)}
//       >
//         Remove
//       </button>
//     </div>
//   ));

//   return (
//     <div className="container mx-auto mt-8">
//       {/* Project Form */}
//       <form className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         {/* Project Name */}
//         <h1 className="text-2xl font-bold mb-4">Create Project</h1>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="projectName"
//           >
//             Project Name
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="projectName"
//             type="text"
//             placeholder="Enter project name"
//             value={projectName}
//             onChange={(e) => setProjectName(e.target.value)}
//           />
//         </div>

//         {/* Project Description */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="projectDescription"
//           >
//             Project Description
//           </label>
//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="projectDescription"
//             placeholder="Enter project description"
//             value={projectDescription}
//             onChange={(e) => setProjectDescription(e.target.value)}
//           />
//         </div>

//         {/* Knowledge Transfer Link */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="knowledgeTransferLink"
//           >
//             Knowledge Transfer Link
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="knowledgeTransferLink"
//             type="text"
//             placeholder="Enter knowledge transfer link"
//             value={knowledgeTransferLink}
//             onChange={(e) => setKnowledgeTransferLink(e.target.value)}
//           />
//         </div>

//         {/* Learning Module Link */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="learningModuleLink"
//           >
//             Learning Module Link
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="learningModuleLink"
//             type="text"
//             placeholder="Enter learning module link"
//             value={learningModuleLink}
//             onChange={(e) => setLearningModuleLink(e.target.value)}
//           />
//         </div>

//         {/* Tech Stack */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="techStack"
//           >
//             Tech Stack
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="techStack"
//             type="text"
//             placeholder="Enter tech stack"
//             value={techStack}
//             onChange={(e) => setTechStack(e.target.value)}
//           />
//         </div>

//         {/* Manager ID - Hidden Input */}
//         <input
//           type="hidden"
//           id="managerId"
//           value={sessionStorage.getItem("userId")}
//         />

//         {/* Team Members Autocomplete */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="teamMembers"
//           >
//             Team Members
//           </label>
//           <input
//             className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="teamMembers"
//             type="text"
//             placeholder="Search team members"
//             value={searchTerm}
//             onChange={handleInputChange}
//           />
//           {/* Autocomplete Suggestions */}
//           {autocompleteSuggestions.length > 0 && searchTerm.length > 0 && (
//             <div className="mt-1 bg-white shadow-md rounded">
//               {autocompleteSuggestions}
//             </div>
//           )}
//         </div>

//         {/* Selected Team Members */}
//         <div className="mb-4">
//           <div className="border border-gray-300 rounded p-2">
//             {selectedTeamMembersList.length > 0 ? (
//               <div>{selectedTeamMembersList}</div>
//             ) : (
//               <p>No team members selected</p>
//             )}
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="flex items-center justify-between">
//           <button
//             onClick={handleSubmit}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Create Project
//           </button>
//         </div>
//       </form>

//       {/* Modal component */}
//       {showModal && (
//         <Modal closeModal={closeModal}>
//           <div className="p-4">
//             <h2 className="text-lg font-bold mb-4">User Details</h2>
//             {userDetails}
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default CreateProject;

// not working properly
import React, { useState, useEffect } from "react";
import Modal from "../UpdateUserDetails/Modal"; // Assuming Modal component is defined in Modal.js

const CreateProject = () => {
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
  const [projectId, setProjectId] = useState(""); // State for project ID

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

    // Debug: Log form input values before creating sanitizedProjectData
    console.log("knowledgeTransferLink:", knowledgeTransferLink);
    console.log("learningModuleLink:", learningModuleLink);
    console.log("projectDescription:", projectDescription);
    console.log("techStack:", techStack);
    console.log("projectName:", projectName);
    console.log("projectId:", projectId); // Log projectId

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
      const response = await fetch("https://localhost:7221/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sanitizedProjectData),
      });

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
    setProjectId(""); // Reset projectId
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
    closeModal();
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
        className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {/* Project Name */}
        <h1 className="text-2xl font-bold mb-4">Create Project</h1>
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
            type="text"
            placeholder="Enter knowledge transfer link"
            value={knowledgeTransferLink}
            onChange={(e) => setKnowledgeTransferLink(e.target.value)}
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
            type="text"
            placeholder="Enter learning module link"
            value={learningModuleLink}
            onChange={(e) => setLearningModuleLink(e.target.value)}
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
          />
        </div>

        {/* Project ID */}
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
            placeholder="Enter project ID"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
          />
        </div>

        {/* Team Members */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Team Members
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="searchUser"
              type="text"
              placeholder="Search for team members"
              value={searchTerm}
              onChange={handleInputChange}
            />
            {autocompleteSuggestions.length > 0 && (
              <div className="absolute bg-white w-full mt-1 rounded-b border border-gray-300">
                {autocompleteSuggestions}
              </div>
            )}
          </div>
          {/* Selected Team Members */}
          <div className="mt-2">{selectedTeamMembersList}</div>
        </div>

        {/* Modal for User Details */}
        {selectedUser && (
          <Modal showModal={showModal} closeModal={closeModal}>
            {userDetails}
          </Modal>
        )}

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
