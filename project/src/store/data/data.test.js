import {data} from './data';
import {ActionType} from '../action';

describe('Data', () => {
  it('should return the initial state by default', () => {
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
    expect(data(undefined, {})).toEqual(initialState);
  });

  it('should set offers by load offers', () => {
    const state = {
      offers: [],
      isOffersDataLoaded: false,
    };
    const offers = [{}, {}, {}];
    const loadOffersAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
    const expectedAction = {
      offers: offers,
      isOffersDataLoaded: true,
    };
    expect(data(state, loadOffersAction)).toEqual(expectedAction);
  });

  it('should set offer by load offer', () => {
    const state = {
      offer: {},
      isOfferDataLoaded: false,
    };
    const offer = {};
    const loadOfferAction = {
      type: ActionType.LOAD_OFFER,
      payload: offer,
    };
    const expectedAction = {
      offer: offer,
      isOfferDataLoaded: true,
    };
    expect(data(state, loadOfferAction)).toEqual(expectedAction);
  });

  it('should set reviews by load reviews', () => {
    const state = {
      reviews: [],
      isReviewsDataLoaded: false,
    };
    const reviews = [{}, {}, {}];
    const loadReviewsAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
    const expectedAction = {
      reviews: reviews,
      isReviewsDataLoaded: true,
    };
    expect(data(state, loadReviewsAction)).toEqual(expectedAction);
  });

  it('should set nearby offers by load nearby', () => {
    const state = {
      nearPlaces: [],
      isNearPlacesDataLoaded: false,
    };
    const nearPlaces = [{}, {}, {}];
    const loadNearbyAction = {
      type: ActionType.LOAD_NEARBY,
      payload: nearPlaces,
    };
    const expectedAction = {
      nearPlaces: nearPlaces,
      isNearPlacesDataLoaded: true,
    };
    expect(data(state, loadNearbyAction)).toEqual(expectedAction);
  });

  it('should set favorites offers by load favorites', () => {
    const state = {
      favorites: [],
      isFavoritesDataLoaded: false,
    };
    const favorites = [{}, {}, {}];
    const loadFavoritesAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: favorites,
    };
    const expectedAction = {
      favorites: favorites,
      isFavoritesDataLoaded: true,
    };
    expect(data(state, loadFavoritesAction)).toEqual(expectedAction);
  });

  it('should set updated data by update data', () => {
    const state = {
      offers: [
        {id: 1, isFavorite: false},
        {id: 2, isFavorite: false},
        {id: 3, isFavorite: true},
      ],
      nearPlaces: [
        {id: 1, isFavorite: false},
        {id: 2, isFavorite: false},
        {id: 3, isFavorite: true},
      ],
      favorites: [
        {id: 3, isFavorite: true},
      ],
    };
    const updatedData = {id: 1, isFavorite: true};
    const updatedDataAction = {
      type: ActionType.UPDATE_DATA,
      payload: updatedData,
    };
    const expectedAction = {
      offers: [
        {id: 1, isFavorite: true},
        {id: 2, isFavorite: false},
        {id: 3, isFavorite: true},
      ],
      nearPlaces: [
        {id: 1, isFavorite: true},
        {id: 2, isFavorite: false},
        {id: 3, isFavorite: true},
      ],
      favorites: [
        {id: 1, isFavorite: true},
        {id: 3, isFavorite: true},
      ],
    };
    expect(data(state, updatedDataAction)).toEqual(expectedAction);
  });
});
