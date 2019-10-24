import React, { useState, useEffect } from "react";
import axios from "axios"
import Nav from "./Nav";
import Search from "./Search"
import RestaurantCard from "./RestaurantCard"


const HomePage = () => {
    const [rest, setRest] = useState([]);


    return (
        <>
        <Nav />
        <Search />
        {rest.map(r => <RestaurantCard key={r.id} r={r} />)}
        </>
    )
}
export default HomePage;
