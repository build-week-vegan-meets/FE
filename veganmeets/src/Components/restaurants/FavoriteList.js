import React from "react";

const FavoriteList = props => {
  return (
    <div>
      <h3>Favorite Restaurants:</h3>
      {props.list.map(restaurant => {
        console.log(restaurant);
        return (
          <div className="favorite-resaurant">
          <p>{restaurant.resturantname}</p>
          <p>{restaurant.phonenumber}</p>
          <p>{restaurant.hoursofoperation}</p>
          <p>{restaurant.address}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FavoriteList;
