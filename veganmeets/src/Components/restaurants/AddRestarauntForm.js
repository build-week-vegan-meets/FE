import React from 'react';
import {withFormik, Field, Form} from 'formik';
import {colors} from '../../colors';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {addRestaurant} from '../../action';

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
        <AddRestaurantFormStyle>
            <h1></h1>
            <Form>
                <Field type="text" name="address" placeholder="Address" value={props.address} />

                <Field type="text" name="city" placeholder="City" value={props.city} />

                <Field type="text" name="state" placeholder="State" value={props.state} />

                <Field type="text" name="zipcode" placeholder="Zip Code" value={props.zipcode} />

                <Field type="text" name="restaurantName" placeholder="Restaurant Name" value={props.name} />

                <Field type="text" name="phoneNumber" placeholder="Phone number" value={props.phone} />

                <Field type="text" name="hoursOfOperation" placeholder="Hours of operation" value={props.hours} />

                <button type="submit">Submit</button>

            </Form>
          </AddRestaurantFormStyle>
    )
}

const AddRestaurantFormik = withFormik({
    mapPropsToValues(val){
        return{
            address: val.address || "",
            city: val.city || "",
            state: val.state || "",
            zipcode: val.zipcode || "",
            restaurantName: val.restaurantName || "",
            phoneNumber: val.phoneNumber || "",
            hoursOfOperation: val.hoursOfOperation || ""
        }
    },
    handleSubmit(values, {props}) {
        let formattedValues = {
            "address": values.address,
            "city": values.city,
            "state": values.state,
            "zipcode": values.zipcode,
            "name": values.restaurantName,
            "phone": values.phoneNumber,
            "hours": values.hoursOfOperation
        }
        props.addRestaurant(formattedValues);
    }
})(AddRestaurantForm)

export const RestaurantFormik = connect(null, {addRestaurant})(AddRestaurantFormik);
