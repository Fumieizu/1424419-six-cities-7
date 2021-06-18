import React from 'react';
import {Link} from 'react-router-dom';
import offerProp from './offer-card.prop';
import {getRatingPercentage} from '../../../utils/utils';
import {OfferType, AppRoute, CardType} from '../../../const';
import PropTypes from 'prop-types';

const ImgSizeType = {
  CITIES: {
    width: 260,
    height: 200,
  },
  FAVORITES: {
    width: 150,
    height: 110,
  },
};

function OfferCard({ offer, onMouseEnter, cardType = CardType.CITIES, isActive = false }) {
  const {id, title, price, rating, type, previewImage, isPremium, isFavorite} = offer;

  return (
    <article
      className={`${cardType}${cardType === CardType.CITIES ? '__place-card' : '__card'} place-card`}
      onMouseEnter={cardType === CardType.CITIES ? () => onMouseEnter(offer.id) : null}
      onMouseLeave={cardType === CardType.CITIES ? () => onMouseEnter({}) : null}
    >

      {(isPremium && cardType === CardType.CITIES)
      && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.OFFER}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={cardType === CardType.FAVORITES ? ImgSizeType.FAVORITES.width : ImgSizeType.CITIES.width}
            height={cardType === CardType.FAVORITES ? ImgSizeType.FAVORITES.height : ImgSizeType.CITIES.height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`place-card__info ${cardType === CardType.FAVORITES ? 'favorites__card-info' : ''}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`${isFavorite ? 'place-card__bookmark-button--active' : ''} place-card__bookmark-button button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingPercentage(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.OFFER}/${id}`}>{title} {isActive && '(active)'}</Link> {/*<-временно*/}
        </h2>
        <p className="place-card__type">{OfferType[type]}</p>
      </div>
    </article>
  );
}

OfferCard.propTypes = {
  ...offerProp,
  cardType: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func,
  isActive: PropTypes.bool,
};

export default OfferCard;
