import {ActionType} from './action';
import {REVIEWS} from '../mocks/reviews';
import {adaptReviewToClient} from '../utils/adapt';
import {Cities, SortType, AuthorizationStatus} from '../const';


const initialState = {
  offers: [],
  reviews: adaptReviewToClient(REVIEWS),
  cities: Object.values(Cities),
  city: Cities.PARIS.name,
  sortType: SortType.DEFAULT,
  activeOffer: null,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
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
        isDataLoaded: true,
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
    default:
      return state;
  }
};

export {reducer};
