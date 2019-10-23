import React, {useState} from "react";
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

const ResraurantPage = props => {

  return (
    <>
      <Nav />
      <Search />
      <Page>
        <ImageContainer>
          <Img src={`${Rest}`} />
          <Img src={`${FrenchToast}`}/>
          <Img src={`${FrenchCasserole}`} />
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
          <Img src={`${Burger}`} />
          <Img src={`${FrenchToast}`} />
          <Img src={`${Mushroom}`}/>
          </ImageContainer>
      </Page>
    </>
  );
};

export default ResraurantPage;
