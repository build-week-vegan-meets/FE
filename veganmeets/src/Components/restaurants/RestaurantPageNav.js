import React from "react";
import { NavLink, Route } from "react-router-dom"
import {colors} from '../../colors';
import styled from "styled-components";

const NavContainer = styled.div`
width: 100%;
display:flex;
justify-content: space-between
padding: 0 2% 0 2%;
`;

const ButtonContainer = styled.div`
width 80%;
display:flex;
justify-content: flex-end;
background-color: ${colors.fern};
padding-right: 2%;
border-radius: 20px;
`;

const Button = styled(NavLink)`
width: 100px;
height: 50px;
// margin: 1% 2% 0 3%;
margin: auto 2%;
text-align: center;
border: 1px solid white;
background-color: white;
border-radius: 5px;
text-decoration: none;
color:${colors.fern};
// padding-left: 3%;
`;

const Vegan = styled.span`
color:#52BA5D;
`;



const Nav = () => {
  return (
    <NavContainer>
      <div>
        <h1>
          <Vegan>Vegan</Vegan>Meets
        </h1>
      </div>
      <ButtonContainer>
          <Button to={`/resturants`}>Add New Restaurant</Button>
          <Button to={`/`}>Homepage</Button>
          <Button to ={'/favorites'}>Favorites</Button>
      </ButtonContainer>
    </NavContainer>
  );
};

export default Nav;