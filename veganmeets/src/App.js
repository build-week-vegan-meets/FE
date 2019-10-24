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
    </div>
  );
}

export default App;
