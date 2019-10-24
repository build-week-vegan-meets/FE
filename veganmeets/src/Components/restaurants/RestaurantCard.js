import React, {useState} from "react";
import styled from "styled-components";
import {colors} from '../../colors';
import RestImage from "../../assets/restaurant.png"
import { NavLink } from "react-router-dom"
import {getAllRestaurants} from '../../action/index';
import {connect} from 'react-redux';

const RestCard = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 20%;
  margin-top: 2%;
  color: black;
  text-decoration: none;
`;
const Img = styled.img`
  width: 300px;
  height: 220px;
  
`;
const TimeLoc = styled.div`
border: 1px solid ${colors.fern};
border-radius: 10px;
padding-left: 2%;
`;



const RestaurantCard = (props) => {


  return (
    <NavLink to={`/restaurants/${props.r.id}`}>
    <RestCard>
    <div>
      <Img src={`${RestImage}`}/>
    </div>
    <TimeLoc>
        <div style={{ display: 'flex'}}>
        <>
        <h1>{props.r.resturantname}</h1>
        <p>Hours: {props.r.hoursofoperation}</p>
        <p>Phone number: {props.r.phonenumber}</p>
        <p>Address: {props.r.address}</p> 
        <p>Ratings: {props.r.ratings}</p>
        </>
      
        </div>
      </TimeLoc>
    </RestCard>
    </NavLink>
    
  );
};

export default RestaurantCard;