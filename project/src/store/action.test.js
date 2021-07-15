import {
  changeCity,
  setActiveOfferId,
  sort,
  loadOffers,
  loadOffer,
  loadNearby,
  loadReviews,
  loadFavorites,
  loadUserInfo,
  updateData,
  requireAuthorization,
  redirectToRoute,
  userLogout,
  ActionType
} from './action';

describe('Actions', () => {
  it('action creator for change city returns correct action', () => {
    const city = 'Paris';
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: city,
    };
    expect(changeCity(city)).toEqual(expectedAction);
  });

  it('action creator for set active offer id returns correct action', () => {
    const id = '1';
    const expectedAction = {
      type: ActionType.ACTIVE_OFFER_ID,
      payload: id,
    };
    expect(setActiveOfferId(id)).toEqual(expectedAction);
  });

  it('action creator for sort type returns correct action', () => {
    const sortType = {
      name: '',
      text: '',
    };
    const expectedAction = {
      type: ActionType.SORT,
      payload: sortType,
    };
    expect(sort(sortType)).toEqual(expectedAction);
  });

  it('action creator for load offers returns correct action', () => {
    const offers = [{}, {}, {}];
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
    expect(loadOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for load offer returns correct action', () => {
    const offer = {};
    const expectedAction = {
      type: ActionType.LOAD_OFFER,
      payload: offer,
    };
    expect(loadOffer(offer)).toEqual(expectedAction);
  });

  it('action creator for load nearby offers returns correct action', () => {
    const nearbyOffers = [{}, {}, {},];
    const expectedAction = {
      type: ActionType.LOAD_NEARBY,
      payload: nearbyOffers,
    };
    expect(loadNearby(nearbyOffers)).toEqual(expectedAction);
  });

  it('action creator for load reviews returns correct action', () => {
    const reviews = [{}, {}, {}];
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
    expect(loadReviews(reviews)).toEqual(expectedAction);
  });

  it('action creator for load favorites offers returns correct action', () => {
    const favorites = [{}, {}, {}];
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: favorites,
    };
    expect(loadFavorites(favorites)).toEqual(expectedAction);
  });

  it('action creator for update data returns correct action', () => {
    const data = {};
    const expectedAction = {
      type: ActionType.UPDATE_DATA,
      payload: data,
    };
    expect(updateData(data)).toEqual(expectedAction);
  });

  it('action creator for require authorization returns correct action', () => {
    const status = 'NO_AUTH';
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
    expect(requireAuthorization(status)).toEqual(expectedAction);
  });

  it('action creator for redirect to route returns correct action', () => {
    const route = '/login';
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: route,
    };
    expect(redirectToRoute(route)).toEqual(expectedAction);
  });

  it('action creator for load user info returns correct action', () => {
    const userInfo = {};
    const expectedAction = {
      type: ActionType.LOAD_USER_INFO,
      payload: userInfo,
    };
    expect(loadUserInfo(userInfo)).toEqual(expectedAction);
  });

  it('action creator for user logout returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };
    expect(userLogout()).toEqual(expectedAction);
  });
});
