import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {colors} from '../../colors';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { doSignup } from '../../action/index';

const SignupFormStyle = styled.div`
  form {
    width: 460px;
    margin: auto 100px;
    padding: 32px;
    text-align: center;
    font-weight: bold;
  }
  h1:before {
    content: "Vegan";
    font-style: normal;
    color: ${colors.fern};
    padding-left: 20px;
  }
  h1:after {
    content: "Meets";
    font-style: normal;
    color: ${colors.mainText};
  }
  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: ${colors.mainText};
  }
  h4 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.mainText}; 
  }
  input {
    margin-top: 32px;
    padding: 0.5rem;
    font-size: 16px;
    width: 100%;
    display: block;
    background: ${colors.white};
    border: 1px solid #CCCCCC;
    box-sizing: border-box;
    border-radius: 10px;
  }
  button {
    width: 250px;
    margin: 32px 0;
    padding: 12px 20px;
    background: ${colors.fern};
    border-radius: 10px;
    color: ${colors.white};
  }
`

const SignupForm = ({errors, touched, status}) => {
    const [newUser, setNewUser] = useState([]);
    useEffect(() => {
      if (status) {
        setNewUser([...newUser, status]);
      }
    }, [status]);
  
    return(
      <SignupFormStyle>
        <h1></h1>
        <div className="signup-form">
        <Form>
          <h3>Sign up with your email address</h3>
  
          <Field 
          type="text"
          name="username"
          placeholder="Username"
          />
        {touched.username && errors.username && (<p className="error">{errors.username}</p>)}
  
        <Field 
        type="password"
        name="password"
        placeholder="Password"
        />
       {touched.password && errors.password && (<p className="error">{errors.password}</p>)} 
  
       {/* <Field
       type="password"
       name="confirm"
       placeholder="Confirm Password"
       />
      {touched.confirm && errors.confirm && (<p className="error">{errors.confirm}</p>)} */}
  
      <button type="submit">Sign Up</button>
  
      <h4>Already have an account? Log in.</h4>
  
        </Form>
      </div>
      </SignupFormStyle>
    )
  };
  
  const FormikSignupForm = withFormik({
    mapPropsToValues({username, password}) {
      return {
        username: username || '',
        password: password || ''
        // confirm: confirm || ''
      };
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required('Please enter email'),
      password: Yup.string().required('Please enter password')
      // confirm: Yup.string().required('Please confirm password')
    }),
    handleSubmit({username, password}, {setStatus}){
     setStatus({username, password})
    } 
  })(SignupForm);

  export const SignupFormik = connect((state) => {
    return {...state.signup};
  }, {doSignup})(FormikSignupForm);
