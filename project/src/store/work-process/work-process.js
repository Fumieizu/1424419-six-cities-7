import {createReducer} from '@reduxjs/toolkit';
import {Cities, SortType} from '../../const';
import {changeCity, sort, setActiveOfferId} from '../action';

const initialState = {
  cities: Object.values(Cities),
  city: Cities.PARIS.name,
  sortType: SortType.DEFAULT,
  activeOffer: null,
};

const workProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(sort, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setActiveOfferId, (state, action) => {
      state.activeOffer = action.payload;
    });
});

export {workProcess};
