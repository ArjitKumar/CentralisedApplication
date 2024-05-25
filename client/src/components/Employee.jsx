import React, { useState, useEffect } from "react";
import { MdOutlineLocalPhone, MdOutlineMailOutline } from "react-icons/md";

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7221/api/Employee");
      const data = await response.json();
      console.log(data);
      setEmployees(data);
      console.log(employees);
    };
    fetchData();
  }, []);

  return (
    // <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <div>
      <h2 className=" text-xl font-bold ">Employee List :-</h2>
      <ul>
        {employees.map((employee) => (
          <li
            key={employee.id}
            div
            className=" mt-3 shadow-xl rounded-lg p-4 mb-4 bg-gradient-to-r from-violet-200 to-cyan-50"
          >
            <div>
              <span className=" font-semibold">Project Details</span> : NA
            </div>
            <div>Username: {employee.username}</div>
            <div>Role: {employee.role}</div>
            <div>
              Name: {employee.firstName} {employee.lastName}
            </div>
            <div className="flex items-center justify-start">
              <MdOutlineMailOutline className="w-5 h-5 "></MdOutlineMailOutline>
              :<span className=" font-normal ml-2 mb-1">{employee.email}</span>
            </div>
            <div className="flex items-center justify-start">
              <MdOutlineLocalPhone></MdOutlineLocalPhone>:
              <span className=" font-normal ml-1 mb-0">{employee.phone}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employee;
