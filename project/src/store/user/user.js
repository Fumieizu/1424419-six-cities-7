import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const';
import {requireAuthorization, userLogout, setEmail} from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userEmail: null,
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(userLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(setEmail, (state, action) => {
      state.userEmail = action.payload;
    });
});

export {user};
