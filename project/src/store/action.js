import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'city/changeCity',
  SORT: 'sort/setSort',
  ACTIVE_OFFER_ID: 'activePlace',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFER: 'data/loadOffer',
  LOAD_NEARBY: 'data/loadNearby',
  LOAD_REVIEWS: 'data/loadReviews',
  LOAD_FAVORITES: 'data/loadFavorites',
  UPDATE_DATA: 'data/updateData',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
  LOAD_USER_INFO: 'user/loadUserInfo',
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (payload) => ({
  payload,
}));

export const setActiveOfferId = createAction(ActionType.ACTIVE_OFFER_ID, (payload) => ({
  payload,
}));

export const sort = createAction(ActionType.SORT, (payload) => ({
  payload,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (payload) => ({
  payload,
}));

export const loadOffer = createAction(ActionType.LOAD_OFFER, (payload) => ({
  payload,
}));

export const loadNearby = createAction(ActionType.LOAD_NEARBY, (payload) => ({
  payload,
}));

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (payload) => ({
  payload,
}));

export const loadFavorites = createAction(ActionType.LOAD_FAVORITES, (payload) => ({
  payload,
}));

export const updateData = createAction(ActionType.UPDATE_DATA, (payload) => ({
  payload,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (payload) => ({
  payload,
}));

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (payload) => ({
  payload,
}));

export const loadUserInfo = createAction(ActionType.LOAD_USER_INFO, (payload) => ({
  payload,
}));

export const userLogout = createAction(ActionType.LOGOUT);
