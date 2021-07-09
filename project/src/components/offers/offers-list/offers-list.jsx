import React from 'react';
import OfferCard from '../offer-card/offer-card';
import offerProp from '../offer-card/offer-card.prop';
import {CardType} from '../../../const';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {setActiveOfferId} from '../../../store/action';
import LoadingScreen from '../../loading-screen/LoadingScreen';
import {getIsOffersDataLoaded} from '../../../store/data/selectors';

const getClassByType = (type) => {
  switch (type) {
    case CardType.FAVORITES:
      return `${type}__places`;
    case CardType.NEAR_PLACES:
      return `${type}__list places__list`;
    default:
      return `${type}__places-list places__list tabs__content`;
  }
};

function OffersList({offers, type = CardType.CITIES}) {
  const dispatch = useDispatch();
  const isOffersDataLoaded = useSelector(getIsOffersDataLoaded);
  return (
    <div className={getClassByType(type)}>
      {
        !isOffersDataLoaded
          ? <LoadingScreen/>
          : offers.map((offer) => (
            <OfferCard
              key={offer.id}
              cardType={type}
              offer={offer}
              onMouseEnter={(payload) => dispatch(setActiveOfferId(payload))}
            />
          ))
      }
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([offerProp]).isRequired,
  ).isRequired,
  type: PropTypes.string,
};

export default OffersList;
