import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import offerProp from '../../../offers/offer-card/offer-card.prop';
import OfferCard from '../../../offers/offer-card/offer-card';
import {CardType} from '../../../../const';

function FavoritesCities({city, offers}) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="#">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {
          offers.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              cardType={CardType.FAVORITES}
            />
          ))
        }
      </div>
    </li>
  );
}

FavoritesCities.propTypes = {
  city: PropTypes.string.isRequired,
  offers: offerProp,
};

export default FavoritesCities;
