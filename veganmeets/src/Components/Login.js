import React from "react";
import Header from "./Header";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components"
import Sideimg from "../assets/Vegfruit.png"


const Container = styled.div`
display: flex;
  height: 100vh;
`;

const HeaderLoginContainer = styled.div`
display:flex;
flex-direction: column
`;

const LoginContainer = styled.div`
width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-top: 15%;
`;

const LoginInput = styled(Field)`
width: 35vw;
  border-radius: 5px;
  height: 5vh;
  margin: 0 0 5% 0;
`;

const SideDiv =styled.div`
background-color: #b2b2b2;
  width: 50vw;
  background-image: url(${Sideimg});
  background-size:cover;
  height:auto;
`;

const Login = ({ errors, touched }) => {
  return (
    <Container>
      <HeaderLoginContainer>
        <Header />
        <LoginContainer>
          <Form>
            <h3>Login</h3>
            <LoginInput
              className="login-input"
              name="username"
              type="text"
              placeholder="Username"
            />
            {touched.username && errors.username && (<p className="errors">{errors.username}</p>)}
            <br />
            <LoginInput
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
        </LoginContainer>
      </HeaderLoginContainer>
      <SideDiv></SideDiv>
    </Container>
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
  handleSubmit({ username, password,}){
  }
})(Login);
export default FormikLogin;
