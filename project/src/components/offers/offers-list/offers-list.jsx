import React, { useState } from 'react';
import OfferCard from '../offer-card/offer-card';
import offerProp from '../offer-card/offer-card.prop';
import {CardType} from '../../../const';
import PropTypes from 'prop-types';


function OffersList({offers}) {
  const  [activeOfferId, setActiveOfferId] = useState('');
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <OfferCard
            key={offer.id}
            cardType={CardType.CITIES}
            offer={offer}
            isActive={activeOfferId === offer.id}
            onMouseEnter={() => (setActiveOfferId(offer.id))}
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
};

export default OffersList;
