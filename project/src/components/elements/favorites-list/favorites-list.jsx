import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer-card/offer-card.prop';
import FavoritesCities from '../favorites-cities/favorites-cities';

function FavoritesList({offers}) {
  const favoriteOffersMap = offers.reduce((acc, offer) => {
    if (acc[offer.city.name]) {
      acc[offer.city.name].push(offer);
    }else {
      acc[offer.city.name] = [offer];
    }
    return acc;
  }, {});

  return (
    <ul className="favorites__list">
      {
        Object
          .keys(favoriteOffersMap)
          .map((city) => <FavoritesCities key={city} city={city} offers={favoriteOffersMap[city]}/>)
      }
    </ul>
  );
}

FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default FavoritesList;
