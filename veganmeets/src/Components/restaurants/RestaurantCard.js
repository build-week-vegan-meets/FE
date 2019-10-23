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
height: 30%;
width: 30%;
padding-left: 2%;
`;

const RestaurantCard = () => {
  return (
    <NavLink to={'/restaurant/:id'}>
    <RestCard>
      <MainInfo>
        <div>
          <Img src={`${RestImage}`}/>
        </div>
        <div>
          <h1>Oui French</h1>
          <p>
            * * * * * <span> 129 reviews</span>
          </p>
          <p>
            $$$$$ <span>French, Rustic</span>
          </p>
        </div>
      </MainInfo>
      <TimeLoc>
        <p>11:30 pm to 9 pm</p>
        <p>(999)999-9999</p>
        <p>23 liberty street<br /> Chinatown, CA, 91416</p>
      </TimeLoc>
    </RestCard>
    </NavLink>
  );
};

export default RestaurantCard;
