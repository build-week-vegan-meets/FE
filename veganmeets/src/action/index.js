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


export const doSignup = data => dispatch => {
    dispatch({ type: SIGNUP, payload: data });
  
    axiosWithAuth().post('/login', ({ ...data, grant_type: 'password' }))
      .then(response => {
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("tokenType", response.data.token_type);
  
      })
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
  
    axiosWithAuth().post('/', {...restaurant, userid: 1 }) //is there a userid and what is the endpoint
      .then(response => dispatch({ type: ADD_RESTAURANT_SUCCESS, payload: response.data }))
      .catch(error => console.log('Add restaurant error', error));
  };

  export const getAllRestaraunts = () => dispatch => {
    dispatch({ type: FETCH_ALL_RESTAURANTS });
  
    axiosWithAuth().get('/')
      .then(response => dispatch({ type: FETCH_ALL_RESTAURANTS_SUCCESS, payload: response.data }))
      .catch(error => console.log('Fetch all restaurants error', error));
  };

  export const updateRestaurant = restaurant => dispatch => {
    dispatch({ type: UPDATE_RESTAURANT, payload: restaurant });
  
    axiosWithAuth().put(`/`, restaurant)
      .then(response => dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: response.data }))
      .catch(error => console.log('Update restaurant error', error));
  };
  
  export const deleteRestaurant = restaurant => dispatch => {
    dispatch({ type: DELETE_RESTAURANT, payload: restaurant });
  
    axiosWithAuth().delete(`/`)
      .then(response => dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: response.data }))
      .catch(error => console.log('Delete restaurant error', error));
  };


