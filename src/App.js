import React from 'react';
import { Route } from 'react-router-dom';
import {SignupFormik} from './components/signup/SignupForm';
import './App.css';

function App() {
  return (
    <div className="App">

      <Route exact path='/register' component={SignupFormik}/>
    </div>
  );
}

export default App;
