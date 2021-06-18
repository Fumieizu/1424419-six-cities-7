import React from 'react';
import OfferCard from '../offer-card/offer-card';
import offerProp from '../offer-card/offer-card.prop';
import {CardType} from '../../../const';
import PropTypes from 'prop-types';


function OffersList({offers, activeOffer, handleMouseEnter}) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <OfferCard
            key={offer.id}
            cardType={CardType.CITIES}
            offer={offer}
            isActive={offer.id === activeOffer}
            onMouseEnter={handleMouseEnter}
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
  activeOffer: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({}),
  ]).isRequired,
  handleMouseEnter: PropTypes.func,
};

export default OffersList;
