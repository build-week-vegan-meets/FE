import * as actions from '../action/index';


export const signup = (state = {}, action) => {
    switch (action.type) {
      case actions.SIGNUP:
        return { ...state, processing: true };
      case actions.SIGNUP_RESULT:
        return { ...state, ...action.payload, processing: false };
      case actions.USER_INFO_FETCH_SUCCESS:
        return { ...state, user: action.payload };
      default:
        return state;
    };
  };

export const login = (state = {}, action) => {
    switch (action.type) {
      case actions.LOGIN:
        return { ...state, processing: true };
      case actions.LOGIN_RESULT:
        return { ...state, ...action.payload, processing: false };
      case actions.USER_INFO_FETCH_SUCCESS:
        return { ...state, user: action.payload };
      default:
        return state;
    };
  };