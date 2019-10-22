import React from 'react';
import { Route } from 'react-router-dom';
import {SignupFormik} from './components/signup/SignupForm';
import {RestaurantFormik} from './components/restaurants/AddRestarauntForm';
import Search from './components/restaurants/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Search />

      <Route exact path='/login' component={SignupFormik}/>
      <Route exact path='/new' render={()=> <RestaurantFormik /> } />
    </div>
  );
}

export default App;
