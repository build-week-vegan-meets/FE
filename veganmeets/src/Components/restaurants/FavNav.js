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
width: 20%;
height: 30px;
margin: 2% 2% 0 2%;
border: 1px solid black
border-radius: 5px;
text-decoration: none;
color:white;
text-align: center;
`;

const Vegan = styled.span`
color:#52BA5D;
`;



const FavNav = () => {
  return (
    <NavContainer>
      <div>
        <h1>
          <Vegan>Vegan</Vegan>Meets
        </h1>
      </div>
      <ButtonContainer>
          <Button to={`/`}>HomePage</Button>
      </ButtonContainer>
    </NavContainer>
  );
};

export default FavNav;