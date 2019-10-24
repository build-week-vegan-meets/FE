import React from 'react';
import {NavLink} from 'react-router-dom';
import {withFormik, Field, Form} from 'formik';
import {colors} from '../../colors';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {addRestaurant} from '../../action';
import BurgerImg from '../../assets/mushroom.png';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const SideDiv = styled.div`
  width: 55vw;
  background-image: url(${BurgerImg});
  background-size: cover;
  height: auto;
  @media (max-width: 500px) {
  display: none;
}
`;

const AddRestaurantFormStyle = styled.div`
form {
    width: 460px;
    margin: auto 100px;
    padding: 32px;
    text-align: center;
    font-weight: bold;
   }
  h1:before {
    content: "Vegan";
    font-style: normal;
    color: ${colors.fern};
    padding-left: 20px;
  }
  h1:after {
    content: "Meets";
    font-style: normal;
    color: ${colors.mainText};
  }
  input {
    margin-top: 32px;
    padding: 0.5rem;
    font-size: 16px;
    width: 100%;
    display: block;
    background: ${colors.white};
    border: 1px solid #CCCCCC;
    box-sizing: border-box;
    border-radius: 10px;
  }
  button {
    width: 250px;
    margin: 32px 0;
    padding: 12px 20px;
    background: ${colors.fern};
    border-radius: 10px;
    color: ${colors.white};
  }
`


function AddRestaurantForm(props){
    return(
      <Container>
        <AddRestaurantFormStyle>
            <h1></h1>
            <Form>
                <Field type="text" name="address" placeholder="Address" value={props.address} />

                 <Field type="text" name="resturantname" placeholder="Restaurant Name" value={props.restaurantname} />

                <Field type="text" name="phonenumber" placeholder="Phone number" value={props.phonenumber} />

                <Field type="text" name="hoursofoperation" placeholder="Hours of operation" value={props.hoursofoperation} />

                {/* <NavLink to={`/`}> */}
                    <button type="submit">Add Restaurant</button>
                {/* </NavLink> */}
            </Form>
          </AddRestaurantFormStyle>
          <SideDiv></SideDiv>
          </Container>
    )
}

const AddRestaurantFormik = withFormik({
    mapPropsToValues(val){
        return{
            address: val.address || "",
            resturantname: val.resturantname || "",
            phonenumber: val.phonenumber || "",
            hoursofoperation: val.hoursofoperation || ""
        }
    },
    handleSubmit(values, {props}) {
        let formattedValues = {
            "address": values.address,
            "name": values.resturantname,
            "phone": values.phonenumber,
            "hours": values.hoursofoperation
        }
        props.addRestaurant(formattedValues);
    }
})(AddRestaurantForm)

export const RestaurantFormik = connect(null, {addRestaurant})(AddRestaurantFormik);