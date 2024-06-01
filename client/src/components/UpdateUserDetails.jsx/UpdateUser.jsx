import React from "react";
import { Formik, Form, Field } from "formik";
import { signupSchema } from "./index.js";
import "./UpdateUser.css";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  username: "",
  password: "",
};

const UpdateUser = () => {
  // const onSubmit = (values, actions) => {
  //   console.log(values);
  //   handleSubmit();
  //   actions.resetForm();
  // }
  // if (isSubmitted) {
  //   return <Navigate to="/" />;
  // }
  return (
    <div className="app">
      <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="signup_form">
            <label htmlFor="firstname">First Name</label>
            <Field type="text" name="firstname" className="inputColor" />
            <div className="error_container">
              {errors.firstname && touched.firstname && (
                <p className="form_error">{errors.firstname}</p>
              )}
            </div>

            <label htmlFor="lastname">Last Name</label>
            <Field type="text" name="lastname" className="inputColor" />
            <div className="error_container">
              {errors.lastname && touched.lastname && (
                <p className="form_error">{errors.lastname}</p>
              )}
            </div>

            <label htmlFor="email">Email</label>
            <Field type="email" name="email" className="inputColor" />
            <div className="error_container">
              {errors.email && touched.email && (
                <p className="form_error">{errors.email}</p>
              )}
            </div>

            <label htmlFor="phone">Phone Number</label>
            <Field type="text" name="phone" className="inputColor" />
            <div className="error_container">
              {errors.phone && touched.phone && (
                <p className="form_error">{errors.phone}</p>
              )}
            </div>

            <label htmlFor="username">User Name</label>
            <Field type="text" name="username" className="inputColor" />
            <div className="error_container">
              {errors.username && touched.username && (
                <p className="form_error">{errors.username}</p>
              )}
            </div>

            <label htmlFor="password">Password</label>
            <Field type="password" name="password" className="inputColor" />
            <div className="error_container">
              {errors.password && touched.password && (
                <p className="form_error">{errors.password}</p>
              )}
            </div>

            <label htmlFor="cpassword">Confirm Password</label>
            <Field type="password" name="cpassword" className="inputColor" />
            <div className="error_container">
              {errors.cpassword && touched.cpassword && (
                <p className="form_error">{errors.cpassword}</p>
              )}
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateUser;
