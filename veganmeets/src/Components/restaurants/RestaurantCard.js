import React from "react";
import styled from "styled-components";
import RestImage from "../../assets/restaurant.png"
import { Route, NavLink } from "react-router-dom"

const RestCard = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-left: 20%;
  margin-top: 2%;
  color: black;
  text-decoration: none;
`;
const Img = styled.img`
  width: 300px;
  height: 200px;
  
`;

const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width 60%;
`;
const TimeLoc = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid #CCCCCC;
// height: 30%;
// width: 30%;
padding-left: 2%;
`;

const RestaurantCard = (props) => {

  const handleEdit= () => {
    props.setForm(props)
  }

  const handleDelete = () => {

  }

  return (
    <NavLink to={'/restaurant/:id'}>
    <RestCard>
      {/* <h1>{props.restaurantName}</h1>
      <p>{props.phoneNumber}</p>
      <p>{props.hoursOfOperation}</p>

      <button onClick={()=>handleEdit()}>Edit</button>
      <button onClick={()=>handleDelete()}>Delete</button> */}


      <TimeLoc>
        <div style={{ display: 'flex'}}>
        <div>
          <Img src={`${RestImage}`}/>
        </div>
        <>
        <h1>{props.r.resturantname}</h1>
        <p>Hours: {props.r.hoursofoperation}</p>
        <p>Phone number: {props.r.phonenumber}</p>
        <p>Address: {props.r.address}</p>
        </>
        </div>
      </TimeLoc>
    </RestCard>
    </NavLink>
  );
};

export default RestaurantCard;
