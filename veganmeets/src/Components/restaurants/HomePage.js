import React from "react";
import Nav from "./Nav";
import Search from "./Search"
import RestaurantCard from "./RestaurantCard"
import { Route, NavLink } from "react-router-dom"




const HomePage = () => {

    return (
        <>
        <Nav />
        <Search />
        <RestaurantCard />
        <RestaurantCard />
        </>
    )
}
export default HomePage