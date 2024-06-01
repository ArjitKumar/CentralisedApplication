import * as Yup from "yup";

const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const signupSchema = Yup.object({
  firstname: Yup.string().min(3).required("Please enter your First name."),
  lastname: Yup.string().min(3).required("Please enter your Last name."),
  email: Yup.string()
    .email("Please enter valid email.")
    .required("Please enter your email."),
  phone: Yup.string()
    .required("required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(10, "too long"),
  password: Yup.string()
    .matches(passwordRegex, "Please enter valid password.")
    .required("Please enter your password."),
  username: Yup.string().min(3).required("Please enter a Username."),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password do NOT match!")
    .required("Please enter confirm password."),
});
