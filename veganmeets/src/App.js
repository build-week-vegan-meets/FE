import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/signup/Login";
import { SignupFormik } from "./Components/signup/SignupForm";
import Search from "./Components/restaurants/Search";
import { RestaurantFormik } from "./Components/restaurants/AddRestarauntForm";
import StarRating from "./Components/restaurants/StarRating";
import HomePage from "./Components/restaurants/HomePage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/signup" component={SignupFormik}/>
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
