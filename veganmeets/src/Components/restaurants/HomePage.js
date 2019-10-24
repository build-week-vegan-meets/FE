import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import RestaurantCard from "./RestaurantCard";

const HomePage = () => {
  const [rest, setRest] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(`https://vegan-meets.herokuapp.com/resturants`)
      .then(response => {
        const restaurants = response.data.filter(restaurant =>
          restaurant.resturantname.toLowerCase().includes(search.toLowerCase()) ||
          restaurant.address.toLowerCase().includes(search.toLowerCase()) ||
          restaurant.hoursofoperation.includes(search)
        );
        

        console.log(response);
        setRest(restaurants);
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  }, [search]);
  const handleInputChange = e => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Nav />
      <input
        type="text"
        onChange={handleInputChange}
        value={search}
        name="name"
        placeholder="search by name, hours of operation or address"
      />
      {rest.map(r => (
        <RestaurantCard key={r.id} r={r} />
      ))}
    </>
  );
};

export default HomePage;
