import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { doSignup } from '../../action';

const SignupForm = ({errors, touched, status}) => {
    const [newUser, setNewUser] = useState([]);
    useEffect(() => {
      if (status) {
        setNewUser([...newUser, status]);
      }
    }, [status]);
  
    return(
        <div className="signup-form">
        <Form>
          <h3>Sign up with your email address</h3>
  
          <Field 
          type="text"
          name="email"
          placeholder="Email"
          />
        {touched.email && errors.email && (<p className="error">{errors.email}</p>)}
  
        <Field 
        type="password"
        name="password"
        placeholder="Password"
        />
       {touched.password && errors.password && (<p className="error">{errors.password}</p>)} 
  
       <Field
       type="password"
       name="confirm"
       placeholder="Confirm Password"
       />
      {touched.confirm && errors.confirm && (<p className="error">{errors.confirm}</p>)}
  
      <button>Sign Up</button>
  
      <h4>Already have an account? Log in.</h4>
  
        </Form>
      </div>
    )
  };
  
  const FormikSignupForm = withFormik({
    mapPropsToValues({email, password, confirm}) {
      return {
        email: email || '',
        password: password || '',
        confirm: confirm || ''
      };
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Please enter email'),
      password: Yup.string().required('Please enter password'),
      confirm: Yup.string().required('Please confirm password')
    }),
    handleSubmit({email, password, confirm}, {setStatus}){
     setStatus({email, password, confirm})
    } 
  })(SignupForm);

  export const SignupFormik = connect((state) => {
    return {...state.signup};
  }, {doSignup})(FormikSignupForm);
