import React from "react";
import styled from "styled-components";

const RestCard = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
 
  margin-left: 20%;
  margin-top: 2%;
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
align-items: stretch;
border: 1px solid #CCCCCC;
height: 25vh;
width: 30%;
padding-top: 3%;
`;

const RestaurantCard = () => {
  return (
    <RestCard>
      <MainInfo>
        <div>
          <Img src="veganmeets/src/assets/restaurant.png" />
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
        <p>23 liberty street<br /> Chinatown, CA, 91416</p>
      </TimeLoc>
    </RestCard>
  );
};

export default RestaurantCard;
