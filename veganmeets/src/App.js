import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { LoginFormik } from "./Components/signup/Login";
import { SignupFormik } from "./Components/signup/SignupForm";
import { RestaurantFormik } from "./Components/restaurants/AddRestarauntForm";
import HomePage from "./Components/restaurants/HomePage";
import RestaurantPage from "./Components/restaurants/RestaurantPage";

function App() {
  return (
    <div className="App">
      <Route exact path="/resturants" component={RestaurantFormik} />
      <Route exact path="/" component={HomePage} />
      <Route
        path="/restaurants/:id"
        render={props => <RestaurantPage {...props} />}
      />
      <Route path="/signup" component={SignupFormik} />
      <Route path="/login" component={LoginFormik} />
    </div>
  );
}

export default App;
