import React from "react";
import "./App.css";
import Login from './Components/signup/Login';
import {SignupFormik} from './Components/signup/SignupForm';
import Search from './Components/restaurants/Search';
import {RestaurantFormik} from './Components/restaurants/AddRestarauntForm';

function App() {
  return (
    <div className="App">
      <Search />
      <RestaurantFormik />
    </div>
  );
}

export default App;
