import reducer from '../../reducers/authReducer';
import * as types from '../../constants/actionTypes';
import { TOKEN_KEY } from '../../constants/localStorageConstants';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: localStorage.getItem(TOKEN_KEY) || '',
      isAuthenticated: false,
      user: {}
    });
  });

  it('should handle REGISTER_SUCCESS || LOGIN_SUCCESS', () => {
    expect(
      reducer(
        {},
        {
          type: types.REGISTER_SUCCESS,
          payload: { token: 'token', user: { _id: '123' } }
        }
      )
    ).toEqual({ isAuthenticated: true, token: 'token', user: { _id: '123' } });
    expect(
      reducer(
        {},
        {
          type: types.LOGIN_SUCCESS,
          payload: { token: 'token', user: { _id: '123' } }
        }
      )
    ).toEqual({ isAuthenticated: true, token: 'token', user: { _id: '123' } });
  });

  it('should handle LOGUOT', () => {
    expect(reducer(undefined, { type: types.LOGOUT })).toEqual({
      isAuthenticated: false,
      token: '',
      user: {}
    });
  });
});
