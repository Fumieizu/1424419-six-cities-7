import {user} from './user';
import {ActionType, loadUserInfo, requireAuthorization} from '../action';
import {AuthorizationStatus} from '../../const';

describe('User', () => {
  it('should return initial state by default', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      userInfo: {},
    };
    expect(user(undefined, {})).toEqual(initialState);
  });

  it('should update authorizationStatus to AUTH', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    };
    const requireAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };
    expect(user(state, requireAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH});
  });

  it('should update authorizationStatus to NO_AUTH', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    };
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };
    expect(user(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH});
  });

  it('should update user info by loadUserInfo', () => {
    const state = {
      userInfo: {},
    };
    const userInfo = {};
    const loadUserInfoAction = {
      type: ActionType.LOAD_USER_INFO,
      payload: userInfo,
    };
    const expectedAction = {
      userInfo: userInfo,
    };
    expect(user(state, loadUserInfoAction)).toEqual(expectedAction);
  });
});
