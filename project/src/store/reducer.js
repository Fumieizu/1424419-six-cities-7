import {ActionType} from './action';
import {Cities, SortType, AuthorizationStatus} from '../const';


const initialState = {
  offers: [],
  offer: {},
  reviews: [],
  nearPlaces: [],
  cities: Object.values(Cities),
  city: Cities.PARIS.name,
  sortType: SortType.DEFAULT,
  activeOffer: null,
  isOffersDataLoaded: false,
  isOfferDataLoaded: false,
  isNearPlacesDataLoaded: false,
  isReviewsDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userEmail: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.ACTIVE_OFFER_ID:
      return {
        ...state,
        activeOffer: action.payload,
      };
    case ActionType.SORT:
      return {
        ...state,
        sortType: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isOffersDataLoaded: true,
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: action.payload,
        isOfferDataLoaded: true,
      };
    case ActionType.LOAD_NEARBY:
      return {
        ...state,
        nearPlaces: action.payload,
        isNearPlacesDataLoaded: true,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        isReviewsDataLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionType.SET_EMAIL:
      return {
        ...state,
        userEmail: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
