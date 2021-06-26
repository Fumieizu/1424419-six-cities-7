import React from 'react';
import { connect } from 'react-redux';
import OffersList from '../offers/offers-list/offers-list';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import offerProp from '../offers/offer-card/offer-card.prop';
import Map from '../map/map';
import {Cities} from '../../const';
import CityList from '../city-list/city-list';
import propCity from '../city/city.prop';
import SortList from '../sort-list/sort-list';
import {sortOffers} from '../../utils/sort';
import Empty from '../empty/empty';

function Main({offers, city, activeOffer}) {
  const isEmpty = offers.length;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to="#">
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

      <main className={`page page--gray page--main ${isEmpty ? '' : 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList />
          </section>
        </div>
        <div className="cities">
          <div className={`cities__places-container container ${isEmpty ? '' : 'cities__places-container--empty'}`}>
            {
              !isEmpty
                ? <Empty/>
                : (
                  <>
                    <section className="cities__places places">
                      <h2 className="visually-hidden">Places</h2>
                      <b className="places__found">{offers.length} places to stay in {city}</b>
                      <SortList key={city.name}/>
                      <OffersList
                        offers={offers}
                        activeOffer={activeOffer}
                      />
                    </section>
                    <div className="cities__right-section">
                      <section className="cities__map map">
                        <Map
                          offers={offers}
                          activeOffer={activeOffer}
                          city={Cities[city.toUpperCase()]}
                        />
                      </section>
                    </div>
                  </>
                )
            }
          </div>
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([offerProp]).isRequired,
  ).isRequired,
  city: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape(propCity),
  ]).isRequired,
  activeOffer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({}),
  ]),
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: sortOffers(state.offers, state.sortType.name, state.city),
  activeOffer: state.activeOffer,
});

export {Main};
export default connect(mapStateToProps)(Main);
