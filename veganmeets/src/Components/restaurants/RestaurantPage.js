import React, {useState} from "react";
import {connect} from 'react-redux';
import {getAllRestaurants} from '../../action/index';
import styled from "styled-components";
import Nav from "./Nav";
import Search from "./Search";
import RestaurantCard from './RestaurantCard';
import styled from "styled-components";
import Nav from "./Nav";
import Search from "./Search";
import axios from "axios";
import FrenchToast from "../../assets/frenchtoast1.png";
import FrenchCasserole from "../../assets/frenchtoast.png";
import Mushroom from "../../assets/mushroom.png"
import Burger from "../../assets/burger.png"
import Rest from "../../assets/restaurant.png"


const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
`;
const ImageContainer = styled.div`
display:flex;
justify-content:space-between;
width 60%;
margin-bottom: 1%;
`;

const Img = styled.img`
  width: 250px;
  height: 200px;
`;

const RestInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  
`;

const LocalRestaurantPage = ({restaurants, getAllRestaurants}) => {
    const [rests, setRests] = useState();

    useEffect(() => {
      getAllRestaurants();
  }, []);

  if(!restaurants){
      return <p>No restaurants to show</p>
  }

  handleChange= e => {
      let value = e.target.value;
      let filtered = restaurants.filter((restaurant,i)=>{
          let data = `${restaurant.name} ${restaurant.city} ${restaurant.food}`.toLowerCase();
          return data.includes(value);
      })
      setRests(filtered);
  }

  const cards = (rests) ? rests.map((e,i)=>{
    return <RestaurantCard key={i} {...e}></RestaurantCard>
}) : restaurants.map((e,i)=>{
    return <RestaurantCard key={i} {...e}></RestaurantCard>
})

  return (
    <>
      <Nav />
      <Search handleChange={handleChange}/>
      <Page>
        <ImageContainer>
          <Img src="veganmeets/src/assets/restaurant.png" />
          <Img src="veganmeets/src/assets/frenchtoast1.png" />
          <Img src="veganmeets/src/assets/frenchtoast.png" />
        </ImageContainer>
        <RestInfoContainer>
          <div>
            <h1>Oui French</h1>
            <p>
              * * * * * <span> 129 reviews</span>
            </p>
            <p>
              $$$$$ <span>French, Rustic</span>
            </p>
            <button>Submit review</button>
            <button>+ Add an item</button>
          </div>
          <div>
            <p>11:30 pm to 9 pm</p>
            <p>23 liberty street Chinatown, CA, 91416</p>
          </div>
          
         
        </RestInfoContainer>
        <p>Vegan Dishes </p>
        <ImageContainer>
          <Img src="veganmeets/src/assets/restaurant.png" />
          <Img src="veganmeets/src/assets/frenchtoast1.png" />
          <Img src="veganmeets/src/assets/frenchtoast.png" />
          </ImageContainer>
      </Page>
    </>
  );
};

export const RestaurantPage = connect((state) => {
  return {...state.restaurants}
}, {getAllRestaurants})(LocalRestaurantPage);
