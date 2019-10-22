import axiosWithAuth from '../utils/axiosWithAuth';

export const SIGNUP = 'SIGNUP';
export const SIGNUP_RESULT = 'SIGNUP_RESULT';
export const LOGIN = 'LOGIN';
export const LOGIN_RESULT = 'LOGIN_RESULT';
export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const ADD_RESTAURANT_SUCCESS = 'ADD_RESTAURANT_SUCCESS';

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
  
    axiosWithAuth().post('/', {...restaurant }) //is there a userid and what is the endpoint
      .then(response => dispatch({ type: ADD_RESTAURANT_SUCCESS, payload: response.data }))
      .catch(error => console.log('Add restaurant error', error));
  };

