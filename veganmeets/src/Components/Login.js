import React from "react";
import Header from "./Header";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";

const Login = ({ errors, touched }) => {
  return (
    <div className="container">
      <div className="headerlogincontainer">
        <Header />
        <div className="login-container">
          <Form>
            <h3>Login</h3>
            <Field
              className="login-input"
              name="username"
              type="text"
              placeholder="Username"
            />
            {touched.username && errors.username && (<p className="errors">{errors.username}</p>)}
            <br />
            <Field
              className="login-input"
              name="password"
              type="password"
              placeholder="Password"
            />
            {touched.password && errors.passowrd && (<p className="errors">{errors.password}</p>)}
          </Form>
          <button type="submit" className="loginbtn">Log In</button>
          <p>
            Don't have an account? <span>Create one.</span>
          </p>
        </div>
      </div>
      <div className="greyspace"></div>
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please enter your username"),
    password: Yup.string().required("Please enter your password")
  }),
})(Login);
export default FormikLogin;
