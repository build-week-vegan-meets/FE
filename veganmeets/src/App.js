<<<<<<< HEAD
import React from "react";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Login />
=======
import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { LoginFormik } from "./Components/signup/Login";
import { SignupFormik } from "./Components/signup/SignupForm";
import { RestaurantFormik } from "./Components/restaurants/AddRestarauntForm";
import HomePage from "./Components/restaurants/HomePage";
import RestaurantPage from "./Components/restaurants/RestaurantPage";
import FavoriteList from "./Components/restaurants/FavoriteList";

function App() {
  const [favoriteList, setFavoriteList] = useState([]);

  const addToFavoriteList = restaurant => {
    setFavoriteList([...favoriteList, restaurant]);
  };
  return (
    <div className="App">
      <Route exact path="/resturants" component={RestaurantFormik} />
      <Route exact path="/" component={HomePage} />
      <Route
        path="/restaurants/:id"
        render={props => <RestaurantPage {...props} 
        setFavoriteList={setFavoriteList}
        addToFavoriteList={addToFavoriteList}
        />}
      />
      <Route path="/signup" component={SignupFormik} />
      <Route path="/login" component={LoginFormik} />
      <Route path="/favorites" render={props => <FavoriteList {...props} list={favoriteList} />}  />
>>>>>>> 4bcfe64ee1217d1ef2bb45f405c572b6b90aa98d
    </div>
  );
}

export default App;
