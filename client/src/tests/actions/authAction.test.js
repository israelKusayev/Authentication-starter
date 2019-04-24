import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from '../../actions/authActions';
import * as types from '../../constants/actionTypes';

describe('actions', () => {
  it('should create an action to logout', () => {
    const expectedAction = { type: types.LOGOUT };
    expect(actions.logout()).toEqual(expectedAction);
  });
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates REGISTER_SUCCESS when register user has been done', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { token: 'someToken' }
      });
    });

    const expectedActions = [
      { type: types.REQUEST_FETCH },
      {
        type: types.REGISTER_SUCCESS,
        payload: { token: 'someToken' }
      }
    ];
    const store = mockStore();

    return store.dispatch(actions.register({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates LOGIN_SUCCESS when login user has been done', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { token: 'someToken' }
      });
    });

    const expectedActions = [
      { type: types.REQUEST_FETCH },
      {
        type: types.LOGIN_SUCCESS,
        payload: { token: 'someToken' }
      }
    ];
    const store = mockStore();

    return store.dispatch(actions.login({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates LOAD_USER_SUCCESS when loadUser has been done', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { token: 'someToken' }
      });
    });

    const expectedActions = [
      { type: types.REQUEST_FETCH },
      {
        type: types.LOAD_USER_SUCCESS,
        payload: { token: 'someToken' }
      }
    ];
    const store = mockStore({ auth: { token: '123' } });

    return store.dispatch(actions.loadUser({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
