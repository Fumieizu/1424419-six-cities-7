import {loadOffers, loadOffer, redirectToRoute, loadNearby, loadReviews, requireAuthorization, loadUserInfo, userLogout, loadFavorites, updateData} from './action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';
import {adaptOfferToClient, adaptReviewToClient, adaptUserInfoToClient} from '../utils/adapt';

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      dispatch(loadOffers(
        data.map((offer) => adaptOfferToClient(offer)),
      ));
    })
);

export const fetchHotel = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({data}) => dispatch(loadOffer(adaptOfferToClient(data))))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchNearbyList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => {
      dispatch(loadNearby(
        data.map((offer) => adaptOfferToClient(offer)),
      ));
    })
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchReviewsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => {
      dispatch(loadReviews(
        data.map((review) => adaptReviewToClient(review)),
      ));
    })
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchFavoritesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      dispatch(loadFavorites(
        data.map((offer) => adaptOfferToClient(offer)),
      ));
    })
    .catch(() => dispatch(redirectToRoute(APIRoute.LOGIN)))
);

export const sendFavorite = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => {
      dispatch(updateData(adaptOfferToClient(data)));
    })
    .catch(() => dispatch(redirectToRoute(AppRoute.LOGIN)))
);

export const createComment = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {comment, rating})
    .then(({data}) => {
      dispatch(loadReviews(
        data.map((review) => adaptReviewToClient(review)),
      ));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUserInfo(adaptUserInfoToClient(data)));
    })
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      api.defaults.headers['x-token'] = data.token;
      dispatch(loadUserInfo(adaptUserInfoToClient(data)));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .then(dispatch(fetchHotelsList()))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(userLogout()))
);
