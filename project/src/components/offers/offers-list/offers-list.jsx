import React from 'react';
import OfferCard from '../offer-card/offer-card';
import offerProp from '../offer-card/offer-card.prop';
import {CardType} from '../../../const';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../../store/action';

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

function OffersList({offers, handleMouseEnter, type = CardType.CITIES}) {
  return (
    <div className={getClassByType(type)}>
      {
        offers.map((offer) => (
          <OfferCard
            key={offer.id}
            cardType={type}
            offer={offer}
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
  handleMouseEnter: PropTypes.func,
  type: PropTypes.string,
};


const mapDispatchToProps = (dispatch) => ({
  handleMouseEnter(offerId) {
    dispatch(ActionCreator.setActiveOfferId(offerId));
  },
});

export {OffersList};

export default connect(null, mapDispatchToProps)(OffersList);
