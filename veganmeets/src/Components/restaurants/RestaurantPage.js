import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Nav from "./Nav";
import Search from "./Search";
import { getAllRestaurants } from "../../action/index";
import RestaurantCard from "../restaurants/RestaurantCard";
import FrenchToast from "../../assets/frenchtoast1.png";
import FrenchCasserole from "../../assets/frenchtoast.png";
import Mushroom from "../../assets/mushroom.png";
import Burger from "../../assets/burger.png";
import Rest from "../../assets/restaurant.png";
import axios from "axios"

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

const RestaurantPage = props => {
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    const id = props.match.params.id;
    console.log(id)
    axios
    .get(`https://vegan-meets.herokuapp.com/resturants/${id}`)
    .then(res => {
      setRestaurant(res.data);
      console.log(res)
    })
    .catch(error => {
      console.log(error, "ERROR");
    });
  },[props.match.params.id]);

  if(!restaurant) {
    return <p>Loading Restaurant Information</p>;
  }

  const {resturantname, address, phonenumber} = restaurant;
  return(
    <div>
      <Nav />
        <h2>Name:{resturantname}</h2>
        <p>Address:{address}</p>
        <p>Phone:{phonenumber}</p>
    </div>
  );

}

export default connect((state) => {
  return {...state.restaurants}
}, {getAllRestaurants})(RestaurantPage);
//   if (!restaurants) {
//     return <p>No restaurants to show</p>;
//   }

//   const handleChange = e => {
//     let value = e.target.value;
//     let filtered = restaurants.filter((restaurant, i) => {
//       let data = `${restaurant.name} ${restaurant.city} ${restaurant.food}`.toLowerCase();
//       return data.includes(value);
//     });
//     setRests(filtered);
//   };

//   const cards = rests
//     ? rests.map((e, i) => {
//         return <RestaurantCard key={i} {...e} />;
//       })
//     : restaurants.map((e, i) => {
//         return <RestaurantCard key={i} {...e} />;
//       });

//   return (
//     <>
//       <Nav />
//       <Search handleChange={handleChange} />
//       <Page>
//         <ImageContainer>
//           <Img src={`${Rest}`} />
//           <Img src={`${FrenchToast}`} />
//           <Img src={`${FrenchCasserole}`} />
//         </ImageContainer>
//         <RestInfoContainer>
//           <div>
//             <h1>Oui French</h1>
//             <p>
//               * * * * * <span> 129 reviews</span>
//             </p>
//             <p>
//               $$$$$ <span>French, Rustic</span>
//             </p>
//             <button>Submit review</button>
//             <button>+ Add an item</button>
//           </div>
//           <div>
//             <p>11:30 pm to 9 pm</p>
//             <p>23 liberty street Chinatown, CA, 91416</p>
//           </div>
//         </RestInfoContainer>
//         <p>Vegan Dishes </p>
//         <ImageContainer>
//           <Img src={`${Burger}`} />
//           <Img src={`${FrenchToast}`} />
//           <Img src={`${Mushroom}`} />
//         </ImageContainer>
//       </Page>
//     </>
//   );
// };


