import axiosWithAuth from '../utils/axiosWithAuth';

export const SIGNUP = 'SIGNUP';
export const SIGNUP_RESULT = 'SIGNUP_RESULT';
export const LOGIN = 'LOGIN';
export const LOGIN_RESULT = 'LOGIN_RESULT';
export const USER_INFO_FETCH_SUCCESS = 'USER_INFO_FETCH_SUCCESS';

export const doSignup = data => dispatch => {
    dispatch({ type: SIGNUP, payload: data });
  
    axiosWithAuth().post('/register', ({ ...data, grant_type: 'password' }))
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

  // export const getUserInfo = () => dispatch => {
  //   return new Promise((resolve, reject) => {
  //     axiosWithAuth().get('/users/getusername')
  //       .then(response => {
  //         dispatch({ type: USER_INFO_FETCH_SUCCESS, payload: response.data });
  //         resolve(response.data);
  //       })
  //       .catch(error => {
  //         console.log('Could not get user info', error);
  //         reject(error);
  //       });
  //   });
  // };