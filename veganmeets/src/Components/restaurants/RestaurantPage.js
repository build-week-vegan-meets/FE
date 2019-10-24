import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { colors } from "../../colors";
import axios from "axios";
import RestaurantPageNav from "./RestaurantPageNav";
import { getAllRestaurants } from "../../action/index";
import RestImage from "../../assets/restaurant.png";
import StarRating from "./StarRating";

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
  border-radius: 5px;
`;
const TimeLoc = styled.div`
  border: 1px solid ${colors.fern};
  border-radius: 10px;
  padding-left: 2%;
`;

const FavBtn = styled.button`
color:red;
`;

const RestaurantPage = (props) => {
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    const id = props.match.params.id;

    axios
      .get(`https://vegan-meets.herokuapp.com/resturants/${id}`)
      .then(res => {
        setRestaurant(res.data);
      })
      .catch(error => {
        console.log(error, "ERROR");
      });
  }, [props.match.params.id]);
  const favorite = () => {
    const addToFavoriteList = props.addToFavoriteList;
    addToFavoriteList(restaurant);
  };


  if (!restaurant) {
    return <p>Loading Restaurant Information...</p>;
  }
  // const handleEdit= () => {
  //   props.setForm(props)
  // }

<<<<<<< HEAD
  // const handleDelete = () => {

  // }
  {/* <button onClick={()=>handleEdit()}>Edit</button>
      <button onClick={()=>handleDelete()}>Delete</button> */} 


  const {resturantname, address, phonenumber, hoursofoperation, ratings} = restaurant;
  return(
    <div>
      <RestaurantPageNav />
    <RestCard>
    <div>
          <Img src={`${RestImage}`}/>
        </div>
      <TimeLoc>
        <div style={{ display: 'flex'}}>
        <>
        <h1>{resturantname}</h1>
        <p>Hours: {hoursofoperation}</p>
        <p>Phone number: {phonenumber}</p>
        <p>Address: {address}</p>
        <p>Ratings: {ratings}</p>
        </>
=======
  const { resturantname, address, phonenumber, hoursofoperation } = restaurant;
  return (
    <div>
      <RestaurantPageNav />
      <RestCard>
        <div>
          <Img src={`${RestImage}`} />
>>>>>>> 01b5549f9a6fe9f0aaeeb48ac229168563b35b2c
        </div>
        <TimeLoc>
          <div style={{ display: "flex" }}>
            <>
              <h1>{resturantname}</h1>
              <p>Hours: {hoursofoperation}</p>
              <p>Phone number: {phonenumber}</p>
              <p>Address: {address}</p>
            </>
          </div>
          <StarRating />
          <FavBtn
          
          className="favoritebtn"
          onClick={()=> favorite()}>
            ♥
          </FavBtn>
        </TimeLoc>
      </RestCard>
    </div>
  );
};

export default connect(
  state => {
    return { ...state.restaurants };
  },
  { getAllRestaurants }
)(RestaurantPage);
