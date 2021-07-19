import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {fetchNearbyList, fetchReviewsList, fetchHotel} from '../../../store/api-actions';
import Room from '../../pages/room/room';
import LoadingScreen from '../loading-screen/LoadingScreen';
import {getOffer, getReviews, getNearPlaces, getIsNearPlacesDataLoaded, getIsOfferDataLoaded, getIsReviewsDataLoaded} from '../../../store/data/selectors';

function RoomWrapper({offerId}) {
  const dispatch = useDispatch();
  const offer = useSelector(getOffer);
  const reviews = useSelector(getReviews);
  const nearPlaces = useSelector(getNearPlaces);
  const isNearPlacesDataLoaded = useSelector(getIsNearPlacesDataLoaded);
  const isOfferDataLoaded = useSelector(getIsOfferDataLoaded);
  const isReviewsDataLoaded = useSelector(getIsReviewsDataLoaded);

  useEffect(() => {
    dispatch(fetchHotel(offerId));
    dispatch(fetchNearbyList(offerId));
    dispatch(fetchReviewsList(offerId));
  }, [offerId, dispatch]);

  const isLoad = isNearPlacesDataLoaded && isOfferDataLoaded && isReviewsDataLoaded;

  if (!isLoad) {
    return <LoadingScreen/>;
  }
  return <Room reviews={reviews} nearPlaces={nearPlaces} offer={offer} />;
}

RoomWrapper.propTypes = {
  offerId: PropTypes.string.isRequired,
};


export default RoomWrapper;
