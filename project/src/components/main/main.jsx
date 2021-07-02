import React from 'react';
import { connect } from 'react-redux';
import OffersList from '../offers/offers-list/offers-list';
import PropTypes from 'prop-types';
import offerProp from '../offers/offer-card/offer-card.prop';
import Map from '../map/map';
import {Cities} from '../../const';
import CityList from '../city-list/city-list';
import propCity from '../city/city.prop';
import SortList from '../sort-list/sort-list';
import {sortOffers} from '../../utils/sort';
import Empty from '../empty/empty';
import Header from '../header/header';

function Main({offers, city, activeOffer, isDataLoaded}) {
  const isEmpty = offers.length;

  return (
    <div className="page page--gray page--main">
      <Header/>
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
              !isEmpty && isDataLoaded
                ? <Empty/>
                : (
                  <>
                    <section className="cities__places places">
                      <h2 className="visually-hidden">Places</h2>
                      <b className="places__found">
                        {
                          isDataLoaded
                            ? `${offers.length} places to stay in ${city}`
                            : 'Loading ...'
                        }
                      </b>
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
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: sortOffers(state.offers, state.sortType.name, state.city),
  activeOffer: state.activeOffer,
  isDataLoaded: state.isDataLoaded,
});

export {Main};
export default connect(mapStateToProps)(Main);
