import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import Search from "./Search";
import RestaurantCard from "./RestaurantCard";

const HomePage = () => {
  const [rest, setRest] = useState([]);
  useEffect(() => {
    const getRest = () => {
      axios
        .get(`vegan-meets.herokuapp.com/resturants`)
        .then(response => {
          console.log(response);
          setRest(response.data);
        })
        .catch(error => {
          console.log("ERROR", error);
        });
    };
    getRest();
  }, []);
  return (
    <>
      <Nav />
      <Search />
      <RestaurantCard />
    </>
  );
};
export default HomePage;
