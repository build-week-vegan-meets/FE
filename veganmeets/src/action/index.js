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
export const ADD_RATINGS = 'ADD_RATINGS';
export const ADD_RATINGS_SUCCESS = 'ADD_RATINGS_SUCCESS';
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
  
    axiosWithAuth().post('/users/getusername', { ...data, grant_type: 'password' })
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



  export const getAllRestaurants = () => dispatch => {
    dispatch({ type: FETCH_ALL_RESTAURANTS });
  
    axiosWithAuth().get(`/resturants`)
      .then(response => dispatch({ type: FETCH_ALL_RESTAURANTS_SUCCESS, payload: response.data }))
      .catch(error => console.log('Fetch all restaurants error', error));
  };



  export const updateRestaurant = r => dispatch => {
    dispatch({ type: UPDATE_RESTAURANT, payload: r });
  
    axiosWithAuth().put('/resturants', r)///resturants/${r.id}
      .then(response => dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: response.data }))
      .catch(error => console.log('Update restaurant error', error));
  };


  
  export const deleteRestaurant = r => dispatch => {
    dispatch({ type: DELETE_RESTAURANT, payload: r });
  
    axiosWithAuth().delete(`/resturants/${r.id}`)///resturants/${r.id}
      .then(response => dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: response.data }))
      .catch(error => console.log('Delete restaurant error', error));
  };



  export const updateMenu = menu => dispatch => {
    dispatch({ type: UPDATE_MENU, payload: menu });
  
    axiosWithAuth().put('/menu', menu)
      .then(response => dispatch({ type: UPDATE_MENU_SUCCESS, payload: response.data }))
      .catch(error => console.log('Update menu error', error));
  };



  export const deleteMenu = menu => dispatch => {
    dispatch({ type: DELETE_MENU, payload: menu });
  
    axiosWithAuth().delete(`/menu/${menu.id}`)
      .then(response => dispatch({ type: DELETE_MENU_SUCCESS, payload: response.data }))
      .catch(error => console.log('Delete menu error', error));
  };

  export const addRatings = ratings => dispatch => {
    dispatch({ type: ADD_RATINGS, payload: ratings });
  
    axiosWithAuth().post('/ratings', {...ratings }) 
      .then(response => dispatch({ type: ADD_RATINGS_SUCCESS, payload: response.data }))
      .catch(error => console.log('Add ratings error', error));
  };

  export const updateRating = ratings => dispatch => {
    dispatch({ type: UPDATE_RATING, payload: ratings });
  
    axiosWithAuth().put('/ratings', ratings)
      .then(response => dispatch({ type: UPDATE_RATING_SUCCESS, payload: response.data }))
      .catch(error => console.log('Update ratings error', error));
  };



  export const deleteRating = ratings => dispatch => {
    dispatch({ type: DELETE_RATING, payload: ratings });
  
    axiosWithAuth().delete(`/ratings/${ratings.id}`)
      .then(response => dispatch({ type: DELETE_RATING_SUCCESS, payload: response.data }))
      .catch(error => console.log('Delete rating error', error));
  };

