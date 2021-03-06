import React from "react";
import { NavLink} from "react-router-dom"
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
background-color: #52BA5D;
padding-right: 2%;
`;

const Button = styled(NavLink)`
width: 100px;
height: 50px;
margin: 4% 2% 4% 2%;
border: 1px solid black
border-radius: 5px;
text-decoration: none;
color:white;
text-align:center;
`;

const Vegan = styled.span`
color:#52BA5D;
`;

const Title = styled.h1`
font-size: 1.6rem;
`;



const Nav = () => {
  return (
    <NavContainer>
      <div>
        <Title>
          <Vegan>Vegan</Vegan>Meets
        </Title>
      </div>
      <ButtonContainer>
          <Button to={`/favorites`}>Favorites</Button>
          <Button to={`/resturants`}>Add New Restaurant</Button>
          <Button to={`/login`}>Log in</Button>
      </ButtonContainer>
    </NavContainer>
  );
};

export default Nav;
