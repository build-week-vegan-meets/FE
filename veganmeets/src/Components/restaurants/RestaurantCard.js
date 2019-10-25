import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import RestImage from "../../assets/restaurant.png";
import { NavLink } from "react-router-dom";

const RestCard = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 5%;
  margin-top: 2%;
  color: black;
  text-decoration: none;
`;
const Img = styled.img`
  width: 330px;
  height: 220px;
  border-radius: 10px;
`;
const TimeLoc = styled.div`
  border: 1px solid ${colors.fern};
  border-radius: 10px;
  padding-left: 2%;
  text-decoration: none;
`;

const RestaurantCard = props => {
  //  const handleEdit= () => {
  //   props.setForm(props)
  // }

  // const handleDelete = () => {

  // }
  {
    /* <button onClick={()=>handleEdit()}>Edit</button>
      <button onClick={()=>handleDelete()}>Delete</button> */
  }

  return (
    <NavLink to={`/restaurants/${props.r.id}`}>
      <RestCard>
        <div>
          <Img src={`${RestImage}`} />
        </div>
        <TimeLoc>
          <h1>{props.r.resturantname}</h1>
          <p>Hours: {props.r.hoursofoperation}</p>
          <p>Phone number: {props.r.phonenumber}</p>
          <p>Address: {props.r.address}</p>
        </TimeLoc>
      </RestCard>
    </NavLink>
  );
};


export default RestaurantCard;
