import React from "react";

function Project({ title, content }) {
  return (
    <div className="ml-64">
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Project;
