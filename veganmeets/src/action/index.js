import axiosWithAuth from '../utils/axiosWithAuth';

export const SIGNUP = 'SIGNUP';
export const SIGNUP_RESULT = 'SIGNUP_RESULT';
export const LOGIN = 'LOGIN';
export const LOGIN_RESULT = 'LOGIN_RESULT';
export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const ADD_RESTAURANT_SUCCESS = 'ADD_RESTAURANT_SUCCESS';
export const FETCH_ALL_RESTAURANTS = 'FETCH_ALL_RESTAURANTS';
export const FETCH_ALL_RESTAURANTS_SUCCESS = 'FETCH_ALL_RESTAURANTS_SUCCESS';
export const UPDATE_RESTAURANT = 'UPDATE_RESTAURANT';
export const UPDATE_RESTAURANT_SUCCESS = 'UPDATE_RESTAURANT_SUCCESS';
export const DELETE_RESTAURANT = 'DELETE_RESTAURANT';
export const DELETE_RESTAURANT_SUCCESS = 'DELETE_RESTAURANT_SUCCESS';
export const UPDATE_MENU = 'UPDATE_MENU';
export const UPDATE_MENU_SUCCESS = 'UPDATE_MENU_SUCCESS';
export const DELETE_MENU = 'DELETE_MENU';
export const DELETE_MENU_SUCCESS = 'DELETE_MENU_SUCCESS';
export const UPDATE_RATING = 'UPDATE_RATING';
export const UPDATE_RATING_SUCCESS = 'UPDATE_RATING_SUCCESS';
export const DELETE_RATING = 'DELETE_RATING';
export const DELETE_RATING_SUCCESS = 'DELETE_RATING_SUCCESS';


export const doSignup = data => dispatch => {
    dispatch({ type: SIGNUP, payload: data });
  
    axiosWithAuth().post('https://vegan-meets.herokuapp.com/users/user', ({ ...data, userroles: [], useremails: [] }))
      
        .then(user => {
        dispatch({ type: SIGNUP_RESULT, payload: { success: true, user } });
        console.log('Successful signup', user);
      })
      .catch(error => {
        console.log('Signup failed', error);
  
        dispatch({
          type: SIGNUP_RESULT,
          payload: {
            success: false,
            message: error.response.data.error_description || error.response.data.error,
          },
        });
      });
  };



export const doLogin = data => dispatch => {
    dispatch({ type: LOGIN, payload: data });
  
    axiosWithAuth().post('/login', { ...data, grant_type: 'password' })
      .then(response => {
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("tokenType", response.data.token_type);
  
      })
      .then(user => {
        dispatch({ type: LOGIN_RESULT, payload: { success: true, user } });
        console.log('Successful login', user);
      })
      .catch(error => {
        console.log('Login failed', error);
  
        dispatch({
          type: LOGIN_RESULT,
          payload: {
            success: false,
            message: error.response.data.error_description || error.response.data.error,
          },
        });
      });
  };



  export const addRestaurant = restaurant => dispatch => {
    dispatch({ type: ADD_RESTAURANT, payload: restaurant });
  
    axiosWithAuth().post('/resturants', {...restaurant }) 
      .then(response => dispatch({ type: ADD_RESTAURANT_SUCCESS, payload: response.data }))
      .catch(error => console.log('Add restaurant error', error));
  };



  export const getAllRestaurants = (id) => dispatch => {
    dispatch({ type: FETCH_ALL_RESTAURANTS });
  
    axiosWithAuth().get(`/resturants`)
      .then(response => dispatch({ type: FETCH_ALL_RESTAURANTS_SUCCESS, payload: response.data }))
      .catch(error => console.log('Fetch all restaurants error', error));
  };



  export const updateRestaurant = restaurant => dispatch => {
    dispatch({ type: UPDATE_RESTAURANT, payload: restaurant });
  
    axiosWithAuth().put(`/resturants/${restaurant.id}`, restaurant)
      .then(response => dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: response.data }))
      .catch(error => console.log('Update restaurant error', error));
  };


  
  export const deleteRestaurant = id => dispatch => {
    dispatch({ type: DELETE_RESTAURANT, payload: id });
  
    axiosWithAuth().delete(`/resturants/${id}`)
      .then(response => dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: response.data }))
      .catch(error => console.log('Delete restaurant error', error));
  };



  export const updateMenu = menu => dispatch => {
    dispatch({ type: UPDATE_MENU, payload: menu });
  
    axiosWithAuth().put(`/`, menu)
      .then(response => dispatch({ type: UPDATE_MENU_SUCCESS, payload: response.data }))
      .catch(error => console.log('Update menu error', error));
  };



  export const deleteMenu = menu => dispatch => {
    dispatch({ type: DELETE_MENU, payload: menu });
  
    axiosWithAuth().delete(`/`)
      .then(response => dispatch({ type: DELETE_MENU_SUCCESS, payload: response.data }))
      .catch(error => console.log('Delete menu error', error));
  };



  export const updateRating = rating => dispatch => {
    dispatch({ type: UPDATE_RATING, payload: rating });
  
    axiosWithAuth().put(`/`, rating)
      .then(response => dispatch({ type: UPDATE_RATING_SUCCESS, payload: response.data }))
      .catch(error => console.log('Update rating error', error));
  };



  export const deleteRating = rating => dispatch => {
    dispatch({ type: DELETE_RATING, payload: rating });
  
    axiosWithAuth().delete(`/`)
      .then(response => dispatch({ type: DELETE_RATING_SUCCESS, payload: response.data }))
      .catch(error => console.log('Delete rating error', error));
  };
