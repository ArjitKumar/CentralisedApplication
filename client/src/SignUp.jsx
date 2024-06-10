// import React, { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import "./SignUp.css";

// const SignUp = () => {
//   const [employee, setEmployee] = useState({
//     username: "",
//     password: "",
//     role: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const validateEmail = (email) => {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@(hcltech\.com|hcl\.com)$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password) => {
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
//     return passwordRegex.test(password);
//   };

//   const validatePhone = (phone) => {
//     const phoneRegex = /^\d{10}$/;
//     return phoneRegex.test(phone);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEmployee({
//       ...employee,
//       [name]: value,
//     });

//     // Perform field-specific validation
//     switch (name) {
//       case "email":
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           email: validateEmail(value)
//             ? ""
//             : "Email should contain @hcltech.com or @hcl.com",
//         }));
//         break;
//       case "password":
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           password: validatePassword(value)
//             ? ""
//             : "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number",
//         }));
//         break;
//       case "phone":
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           phone: validatePhone(value) ? "" : "Phone number must be 10 digits",
//         }));
//         break;
//       default:
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           [name]: value ? "" : "This field is required",
//         }));
//         break;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if there are any errors
//     let hasErrors = false;
//     const newErrors = {};

//     if (!validateEmail(employee.email)) {
//       newErrors.email = "Email should contain @hcltech.com or @hcl.com";
//       hasErrors = true;
//     }
//     if (!validatePassword(employee.password)) {
//       newErrors.password =
//         "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
//       hasErrors = true;
//     }
//     if (!validatePhone(employee.phone)) {
//       newErrors.phone = "Phone number must be 10 digits";
//       hasErrors = true;
//     }

//     // Validate other fields
//     for (const field in employee) {
//       if (!employee[field]) {
//         newErrors[field] = "This field is required";
//         hasErrors = true;
//       }
//     }

//     if (hasErrors) {
//       setErrors(newErrors);
//       return;
//     }

//     try {
//       const response = await fetch("https://localhost:7221/api/Employee", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(employee),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Employee created successfully", data);
//         setIsSubmitted(true);
//       } else {
//         console.error("Failed to create employee");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   if (isSubmitted) {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <div className="max-w-md mx-auto bg-gray-100 p-8 rounded-lg shadow-2xl">
//       <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="username"
//           >
//             Username
//           </label>
//           <input
//             type="text"
//             name="username"
//             value={employee.username}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-blue-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Username"
//             required
//           />
//           {errors.username && (
//             <p className="text-red-500 text-sm">{errors.username}</p>
//           )}
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="password"
//           >
//             Password
//           </label>
//           <input
//             id="password123"
//             type="password"
//             name="password"
//             value={employee.password}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-blue-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Password"
//             required
//           />
//           {errors.password && (
//             <p className="text-red-500 text-sm">{errors.password}</p>
//           )}
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="role"
//           >
//             Role
//           </label>
//           <select
//             name="role"
//             value={employee.role}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-blue-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           >
//             <option value="" disabled>
//               Select role
//             </option>
//             <option value="Technical Manager">Technical Manager</option>
//             <option value="Technical Lead">Technical Lead</option>
//             <option value="Senior Software Engineer">
//               Senior Software Engineer
//             </option>
//             <option value="Software Developer">Software Developer</option>
//             <option value="Graduate Engineer Trainee">
//               Graduate Engineer Trainee
//             </option>
//             <option value="Tester">Tester</option>
//           </select>
//           {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="firstName"
//           >
//             First Name
//           </label>
//           <input
//             type="text"
//             name="firstName"
//             value={employee.firstName}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-blue-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="First Name"
//             required
//           />
//           {errors.firstName && (
//             <p className="text-red-500 text-sm">{errors.firstName}</p>
//           )}
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="lastName"
//           >
//             Last Name
//           </label>
//           <input
//             type="text"
//             name="lastName"
//             value={employee.lastName}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-blue-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Last Name"
//             required
//           />
//           {errors.lastName && (
//             <p className="text-red-500 text-sm">{errors.lastName}</p>
//           )}
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="email"
//           >
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             value={employee.email}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-blue-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Email"
//             required
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm">{errors.email}</p>
//           )}
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="phone"
//           >
//             Phone
//           </label>
//           <input
//             type="text"
//             name="phone"
//             value={employee.phone}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-blue-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Phone"
//             required
//           />
//           {errors.phone && (
//             <p className="text-red-500 text-sm">{errors.phone}</p>
//           )}
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Sign Up
//           </button>
//           <Link
//             to="/login"
//             className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
//           >
//             Already have an account? Log in
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignUp;

// ------------------------- testing componnent ---------------------------------------
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";

const SignUp = () => {
  const [employee, setEmployee] = useState({
    username: "",
    password: "",
    role: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(hcltech\.com|hcl\.com)$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });

    // Perform field-specific validation
    switch (name) {
      case "email":
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: validateEmail(value)
            ? ""
            : "Email should contain @hcltech.com or @hcl.com",
        }));
        break;
      case "password":
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: validatePassword(value)
            ? ""
            : "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number",
        }));
        break;
      case "phone":
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: validatePhone(value) ? "" : "Phone number must be 10 digits",
        }));
        break;
      default:
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: value ? "" : "This field is required",
        }));
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if there are any errors
    let hasErrors = false;
    const newErrors = {};

    if (!validateEmail(employee.email)) {
      newErrors.email = "Email should contain @hcltech.com or @hcl.com";
      hasErrors = true;
    }
    if (!validatePassword(employee.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
      hasErrors = true;
    }
    if (!validatePhone(employee.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      hasErrors = true;
    }

    // Validate other fields
    for (const field in employee) {
      if (!employee[field]) {
        newErrors[field] = "This field is required";
        hasErrors = true;
      }
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("https://localhost:7221/api/Employee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Employee created successfully", data);
        toast.success("Signup successful");
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        console.error("Failed to create employee", data);
        toast.error(
          data.message ||
            "An employee with the same username or email already exists."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to create employee");
    }
  };

  if (isSubmitted) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="max-w-md mx-auto p-8 rounded-lg shadow-red-600 shadow-2xl bg-gradient-to-r from-indigo-700 to-blue-400">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Sign Up
      </h2>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            value={employee.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-blue-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Username"
            required
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password123"
            type="password"
            name="password"
            value={employee.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-blue-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            required
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="role"
          >
            Role
          </label>
          <select
            name="role"
            value={employee.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-blue-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>
              Select role
            </option>
            <option value="Technical Manager">Technical Manager</option>
            <option value="Technical Lead">Technical Lead</option>
            <option value="Senior Software Engineer">
              Senior Software Engineer
            </option>
            <option value="Software Developer">Software Developer</option>
            <option value="Graduate Engineer Trainee">
              Graduate Engineer Trainee
            </option>
            <option value="Tester">Tester</option>
          </select>
          {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-blue-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="First Name"
            required
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-blue-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Last Name"
            required
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-blue-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={employee.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-blue-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Phone"
            required
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
        <div className="flex items-center justify-between mt-8">
          <button
            type="submit"
            className="bg-sky-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
          <Link
            to="/login"
            className="inline-block align-baseline font-bold text-sm text-black hover:text-blue-800"
          >
            Already have an account? Log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
