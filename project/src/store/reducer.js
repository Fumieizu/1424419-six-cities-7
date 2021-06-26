import {ActionType} from './action';
import {OFFERS} from '../mocks/offers';
import {REVIEWS} from '../mocks/reviews';
import {adaptOfferToClient, adaptReviewToClient} from '../utils/adapt';
import {Cities, SortType} from '../const';

const adaptedOffers = OFFERS.map((offer) => adaptOfferToClient(offer));
const adaptedReviews = REVIEWS.map((review) => adaptReviewToClient(review));

const initialState = {
  offers: adaptedOffers,
  reviews: adaptedReviews,
  cities: Object.values(Cities),
  city: Cities.PARIS.name,
  sortType: SortType.DEFAULT,
  activeOffer: null,
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
    default:
      return state;
  }
};

export {reducer};
