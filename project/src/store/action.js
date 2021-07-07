const ActionType = {
  CHANGE_CITY: 'city/changeCity',
  SORT: 'sort/setSort',
  ACTIVE_OFFER_ID: 'activePlace',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFER: 'data/loadOffer',
  LOAD_NEARBY: 'data/loadNearby',
  LOAD_REVIEWS: 'data/loadReviews',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
  SET_EMAIL: 'user/setEmail',
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  setActiveOfferId: (id) => ({
    type: ActionType.ACTIVE_OFFER_ID,
    payload: id,
  }),
  sort: (sortType) => ({
    type: ActionType.SORT,
    payload: sortType,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  loadNearby: (payload) => ({
    type: ActionType.LOAD_NEARBY,
    payload,
  }),
  loadReviews: (payload) => ({
    type: ActionType.LOAD_REVIEWS,
    payload,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  setEmail: (email) => ({
    type: ActionType.SET_EMAIL,
    payload: email,
  }),
};

export {ActionType, ActionCreator};
