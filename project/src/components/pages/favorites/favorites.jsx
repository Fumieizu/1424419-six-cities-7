import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import offerProp from '../../offers/offer-card/offer-card.prop';
import FavoritesList from './favorites-list/favorites-list';
import FavoritesEmpty from './favorites-empty/favorites-empty';


function Favorites({offers}) {
  const isEmpty = offers.length === 0;

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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {
            isEmpty
              ? <FavoritesEmpty/>
              : (
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>
                  <FavoritesList offers={offers}/>
                </section>
              )

          }
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

Favorites.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default Favorites;
