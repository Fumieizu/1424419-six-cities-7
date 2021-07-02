import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import offerProp from '../../offers/offer-card/offer-card.prop';
import FavoritesList from './favorites-list/favorites-list';
import FavoritesEmpty from './favorites-empty/favorites-empty';
import {connect} from 'react-redux';
import Header from '../../header/header';

function Favorites({offers}) {
  const isEmpty = offers.length === 0;

  return (
    <div className={`page ${isEmpty ? 'page--favorites-empty' : ''}`}>
      <Header/>
      <main className={`page__main page__main--favorites ${isEmpty ? 'page__main--favorites-empty' : ''}`} >
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

const mapStateToProps = (state) => ({
  offers: state.offers.filter(({isFavorite}) => isFavorite),
});

export {Favorites};

export default connect(mapStateToProps)(Favorites);
