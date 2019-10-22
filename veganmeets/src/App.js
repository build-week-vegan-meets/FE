import React from "react";
import "./App.css";
import Login from './Components/signup/Login';
import {SignupFormik} from './Components/signup/SignupForm';
import Search from './Components/restaurants/Search';
import {RestaurantFormik} from './Components/restaurants/AddRestarauntForm';
import StarRating from './Components/restaurants/StarRating';

function App() {
  return (
    <div className="App">
      <StarRating />
    </div>
  );
}

export default App;
