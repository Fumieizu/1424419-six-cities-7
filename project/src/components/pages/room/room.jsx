import React from 'react';
import RoomGallery from './room-gallery/room-gallery';
import offerProp from '../../offers/offer-card/offer-card.prop';
import PropTypes from 'prop-types';
import {getRatingPercentage} from '../../../utils/common';
import {OfferType, CardType, AuthorizationStatus} from '../../../const';
import RoomReviewsForm from './room-reviews-form/room-reviews-form';
import ReviewList from './review-list/review-list';
import reviewProp from '../room/review/review-prop';
import Map from '../../map/map';
import OffersList from '../../offers/offers-list/offers-list';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../../header/header';
import {getAuthorizationStatus} from '../../../store/user/selectors';
import {sendFavorite} from '../../../store/api-actions';

const MIN_COUNT = 1;

function Room ({nearPlaces, reviews, offer}) {
  const {images, description, price, maxAdults, goods, host, rating, title, type, bedrooms, isFavorite, isPremium, city, id} = offer;
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
  const status = isFavorite ? '0' : '1';

  return (
    <div className="page">
      <Header/>
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
                <button
                  className={`${isFavorite ? 'property__bookmark-button--active' : ''} property__bookmark-button button`}
                  type="button"
                  onClick={() => {
                    dispatch(sendFavorite(id, status));
                  }}
                >
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
                {isAuth ? <RoomReviewsForm id={id} /> : ''}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={nearPlaces} city={city} currentOffer={offer}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers={nearPlaces} type={CardType.NEAR_PLACES}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

Room.propTypes = {
  ...offerProp,
  offer: PropTypes.shape(offerProp).isRequired,
  reviews:  PropTypes.arrayOf(
    PropTypes.oneOfType([reviewProp]).isRequired,
  ),
};

export default Room;
