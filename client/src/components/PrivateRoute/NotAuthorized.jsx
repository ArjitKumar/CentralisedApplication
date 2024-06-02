import React from "react";
import { Link } from "react-router-dom";

const NotAuthorized = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          Not Authorized
        </h2>
        <p className="mb-4">You do not have permission to access this page.</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotAuthorized;
