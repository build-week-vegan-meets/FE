import React from "react";
import Header from "../restaurants/Header";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";
import {connect} from 'react-redux';
import {doLogin} from '../../action/index';
import styled from "styled-components";
import Sideimg from "../../assets/Vegfruit.png";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const HeaderLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
   @media (max-width: 500px) {
    width: 100%;
    align-items: center;
  }
`;

const LoginContainer = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-top: 15%;

  @media (max-width: 500px){
      width:100%;
  }
`;

const LoginInput = styled(Field)`
  width: 35vw;
  border-radius: 5px;
  height: 5vh;
  margin: 0 0 5% 0;

  @media (max-width: 500px){
      width:90vw;
  }
`;

const SideDiv = styled.div`
  background-color: #b2b2b2;
  width: 50vw;
  background-image: url(${Sideimg});
  background-size: cover;
  height: auto;
  @media (max-width: 500px) {
    display: none;
  }
`;

const LoginBtn = styled.button`
width:45%;
height:5%;
background-color:#52ba5d;
color:white;
border-radius:5px;

@media (max-width: 500px){
width:60vw;
height: 6%;
margin-top:5%;
}
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
            {touched.username && errors.username && (
              <p className="errors">{errors.username}</p>
            )}
            <br />
            <LoginInput
              className="login-input"
              name="password"
              type="password"
              placeholder="Password"
            />
            {touched.password && errors.passowrd && (
              <p className="errors">{errors.password}</p>
            )}
          </Form>
          <LoginBtn type="submit" className="loginbtn">
            Log In
          </LoginBtn>
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
  handleSubmit({ username, password }, {setStatus}){
    setStatus({username, password})
  }
})(Login);
export const LoginFormik = connect((state) => {
  return{...state.login};
}, {doLogin})(FormikLogin);
