import React from "react";
import Nav from "./Nav";
import Search from "./Search"
import styled from "styled-components"
import RestaurantCard from "./RestaurantCard"

const CardContainer = styled.div`

`;


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