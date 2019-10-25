import React from "react";
import FavNav from "./FavNav";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Fav = styled.div`
  width: 50%;
  border: 1px solid #52ba5d;
  margin-left: 25%;
  margin-top: 5%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  p{
      text-decoration:none
  }
`;

const FavRest = styled.h3`
  display: flex;
  justify-content: center;
  color: #52ba5d;
  text-decoration: underline;
`;
const FavoriteList = props => {
  return (
    <div>
      <div>
        <FavNav />
      </div>
      <FavRest>Favorite Restaurants</FavRest>
      {props.list.map(restaurant => {
        return (
          <NavLink to={`/restaurants/${restaurant.id}`}>
            <Fav className="favorite-resaurant">
              <p>{restaurant.resturantname}</p>
              <p>{restaurant.hoursofoperation}</p>
              <p>{restaurant.phonenumber}</p>
              <p>{restaurant.address}</p>
            </Fav>
          </NavLink>
        );
      })}
    </div>
  );
};

export default FavoriteList;
