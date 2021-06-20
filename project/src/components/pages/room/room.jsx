import React from 'react';
import {Link} from 'react-router-dom';
import RoomGallery from './room-gallery/room-gallery';
import offerProp from '../../offers/offer-card/offer-card.prop';
import PropTypes from 'prop-types';
import {getRatingPercentage} from '../../../utils/utils';
import {OfferType, CardType} from '../../../const';
import RoomReviewsForm from './room-reviews-form/room-reviews-form';
import ReviewList from './review-list/review-list';
import reviewProp from '../room/review/review-prop';
import Map from '../../map/map';
import OffersList from '../../offers/offers-list/offers-list';

const MIN_COUNT = 1;
const NEAR_OFFERS_MAX_COUNT = 3;

function Room ({offers, filteredOffer, reviews}) {
  const {images, description, price, maxAdults, goods, host, rating, title, type, bedrooms, isFavorite, isPremium, location, id} = filteredOffer;
  const nearOffers = offers.slice(0, NEAR_OFFERS_MAX_COUNT);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="#">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <RoomGallery images={images}/>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                )
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`${isFavorite ? 'property__bookmark-button--active' : ''} property__bookmark-button button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getRatingPercentage(rating)}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {OfferType[type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${bedrooms} ${bedrooms === MIN_COUNT ? 'Bedroom' : 'Bedrooms'}`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${maxAdults} ${maxAdults === MIN_COUNT ? 'adult' : 'adults'}`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods.map((good) => (
                      <li key={good} className="property__inside-item">
                        {good}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${host.isPro && 'property__avatar-wrapper--pro'} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {
                    host.isPro && (
                      <span className="property__user-status">
                        Pro
                      </span>
                    )
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewList reviews={reviews}/>
                <RoomReviewsForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={offers} city={location} activeOffer={id}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers={nearOffers} type={CardType.NEAR_PLACES}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

Room.propTypes = {
  ...offerProp,
  filteredOffer: PropTypes.shape(offerProp).isRequired,
  reviews:  PropTypes.arrayOf(
    PropTypes.oneOfType([reviewProp]).isRequired,
  ),
};

export default Room;
