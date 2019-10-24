import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import {colors} from '../../colors';
import axios from 'axios';
import RestaurantPageNav from "./RestaurantPageNav";
import { getAllRestaurants } from '../../action/index';
import RestImage from "../../assets/restaurant.png"
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
  
`;
const TimeLoc = styled.div`
border: 1px solid ${colors.fern};
border-radius: 10px;
padding-left: 2%;
`;


const RestaurantPage = (props, {restaurants}) => {
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
  },[props.match.params.id]);

  if(!restaurant) {
    return <p>Loading Restaurant Information...</p>
  }


//     const handleChange= e => {
//     let value = e.target.value;
//     let filtered = restaurants.filter((restaurant,i)=>{
//         let data = `${restaurant.name} ${restaurant.city} ${restaurant.food}`.toLowerCase();
//         return data.includes(value);
//     })
//     setRests(filtered);
// }

//   const cards = (rests) ? rests.map((e,i)=>{
//   return <RestaurantCard key={i} {...e} />
// }) : restaurants.map((e,i)=>{
//   return <RestaurantCard key={i} {...e} />
// })

  const {resturantname, address, phonenumber, hoursofoperation} = restaurant;
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
        </>
        </div>
      </TimeLoc>
    </RestCard>
    <StarRating />
    </div>
  );

}

export default connect((state) => {
  return {...state.restaurants}
}, {getAllRestaurants})(RestaurantPage);




