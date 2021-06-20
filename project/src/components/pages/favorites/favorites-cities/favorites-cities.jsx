import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import offerProp from '../../../offers/offer-card/offer-card.prop';
import OffersList from '../../../offers/offers-list/offers-list';
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
      <OffersList offers={offers} type={CardType.FAVORITES}/>
    </li>
  );
}

FavoritesCities.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([offerProp]).isRequired,
  ).isRequired,
};

export default FavoritesCities;
