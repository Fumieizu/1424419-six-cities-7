import {createReducer} from '@reduxjs/toolkit';
import {loadOffers, loadOffer, loadNearby, loadReviews, loadFavorites, updateData} from '../action';

const initialState = {
  offers: [],
  offer: {},
  reviews: [],
  nearPlaces: [],
  favorites: [],
  isOffersDataLoaded: false,
  isOfferDataLoaded: false,
  isNearPlacesDataLoaded: false,
  isReviewsDataLoaded: false,
  isFavoritesDataLoaded: false,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isOffersDataLoaded = true;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
      state.isOfferDataLoaded = true;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
      state.isReviewsDataLoaded = true;
    })
    .addCase(loadNearby, (state, action) => {
      state.nearPlaces = action.payload;
      state.isNearPlacesDataLoaded = true;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
      state.isFavoritesDataLoaded = true;
    })
    .addCase(updateData, (state, {payload}) => {
      state.offers = state.offers.map((offer) => offer.id === payload.id ? payload : offer);
      state.offer = payload;
      state.favorites = state.offers.filter((offer) => offer.isFavorite);
      state.nearPlaces = state.nearPlaces.map((offer) => offer.id === payload.id ? payload : offer);
    });
});

export {data};
