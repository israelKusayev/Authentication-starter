import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOAD_USER_FAILED,
  LOAD_USER_SUCCESS,
  LOGOUT
} from '../constants/actionTypes';
import { TOKEN_KEY } from '../constants/localStorageConstants';

const initialState = {
  token: localStorage.getItem(TOKEN_KEY) || '',
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem(TOKEN_KEY, payload.token);

      return {
        ...state,
        isAuthenticated: true,
        user: payload.user,
        token: localStorage.getItem(TOKEN_KEY)
      };

    case REGISTER_FAILED:
    case LOGIN_FAILED:
    case LOAD_USER_FAILED:
    case LOGOUT:
      console.log({ ...state });

      localStorage.removeItem(TOKEN_KEY);
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      };

    default:
      return state;
  }
};
