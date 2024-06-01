// src/components/Modal.js

import React from "react";

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full border border-black">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">
          Project Details :-
        </h2>
        <table className="min-w-full bg-white border-collapse">
          <tbody>
            <tr className="hover:bg-gray-200">
              <td className="border px-4 py-2 font-bold text-gray-700">
                Project ID
              </td>
              <td className="border px-4 py-2 text-gray-700">
                {project.projectID}
              </td>
            </tr>
            <tr className="hover:bg-gray-200">
              <td className="border px-4 py-2 font-bold text-gray-700">
                Project Name
              </td>
              <td className="border px-4 py-2 text-gray-700">
                {project.projectName}
              </td>
            </tr>
            <tr className="hover:bg-gray-200">
              <td className="border px-4 py-2 font-bold text-gray-700">
                Description
              </td>
              <td className="border px-4 py-2 text-gray-700 break-words">
                {project.projectDescription}
              </td>
            </tr>
            <tr className="hover:bg-gray-200">
              <td className="border px-4 py-2 font-bold text-gray-700">
                Knowledge Transfer Link
              </td>
              <td className="border px-4 py-2 text-gray-700">
                <a
                  href={project.knowledgeTransferLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline break-words"
                >
                  {project.knowledgeTransferLink}
                </a>
              </td>
            </tr>
            <tr className="hover:bg-gray-200">
              <td className="border px-4 py-2 font-bold text-gray-700">
                Learning Module Link
              </td>
              <td className="border px-4 py-2 text-gray-700">
                <a
                  href={project.learningModuleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline break-words"
                >
                  {project.learningModuleLink}
                </a>
              </td>
            </tr>
            <tr className="hover:bg-gray-200">
              <td className="border px-4 py-2 font-bold text-gray-700">
                Tech Stack
              </td>
              <td className="border px-4 py-2 text-gray-700">
                {project.techStack}
              </td>
            </tr>
            <tr className="hover:bg-gray-200">
              <td className="border px-4 py-2 font-bold text-gray-700">
                Manager
              </td>
              <td className="border px-4 py-2 text-gray-700">
                {project.managerFirstName} {project.managerLastName}
              </td>
            </tr>
            <tr className="hover:bg-gray-200">
              <td className="border px-4 py-2 font-bold text-gray-700">
                Team Members
              </td>
              <td className="border px-4 py-2 text-gray-700">
                <ul className="list-disc list-inside">
                  {project.teamMembers.map((member) => (
                    <li key={member.teamMemberID}>
                      {member.employeeFirstName} {member.employeeLastName}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
