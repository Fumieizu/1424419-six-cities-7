import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchNearbyList, fetchReviewsList, fetchHotel} from '../../../../store/api-actions';
import reviewProp from '../../room/review/review-prop';
import offerProp from '../../../offers/offer-card/offer-card.prop';
import Room from '../room';
import LoadingScreen from '../../../loading-screen/LoadingScreen';

function RoomWrapper({offer, offerId, reviews, nearPlaces, getNearPlacesDate, getReviewsDate, getOfferDate, isNearPlacesDataLoaded, isOfferDataLoaded, isReviewsDataLoaded}) {
  useEffect(() => {
    getOfferDate(offerId);
    getNearPlacesDate(offerId);
    getReviewsDate(offerId);
  }, [offerId]);

  const isLoad = isNearPlacesDataLoaded && isOfferDataLoaded && isReviewsDataLoaded;

  if (!isLoad) {
    return <LoadingScreen/>;
  }
  return <Room reviews={reviews} nearPlaces={nearPlaces} offer={offer} />;
}

RoomWrapper.propTypes = {
  offer: PropTypes.object,
  offerId: PropTypes.string,
  reviews: PropTypes.arrayOf(reviewProp),
  nearPlaces: PropTypes.arrayOf(offerProp),
  getNearPlacesDate: PropTypes.func,
  getReviewsDate: PropTypes.func,
  getOfferDate: PropTypes.func.isRequired,
  isNearPlacesDataLoaded: PropTypes.bool,
  isOfferDataLoaded: PropTypes.bool,
  isReviewsDataLoaded: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  offer: state.offer,
  reviews: state.reviews,
  nearPlaces: state.nearPlaces,
  isNearPlacesDataLoaded: state.isNearPlacesDataLoaded,
  isOfferDataLoaded: state.isOfferDataLoaded,
  isReviewsDataLoaded: state.isReviewsDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getNearPlacesDate(id) {
    dispatch(fetchNearbyList(id));
  },
  getReviewsDate(id) {
    dispatch(fetchReviewsList(id));
  },
  getOfferDate(id) {
    dispatch(fetchHotel(id));
  },
});

export {RoomWrapper};

export default connect(mapStateToProps, mapDispatchToProps)(RoomWrapper);
