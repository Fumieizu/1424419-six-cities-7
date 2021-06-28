const ActionType = {
  CHANGE_CITY: 'city/changeCity',
  SORT: 'sort/setSort',
  ACTIVE_OFFER_ID: 'activePlace',
  LOAD_OFFERS: 'data/loadOffers',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
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
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};

export {ActionType, ActionCreator};
