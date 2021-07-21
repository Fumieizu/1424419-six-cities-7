import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import OffersList from '../../elements/offers-list/offers-list';
import Map from '../../elements/map/map';
import {Cities} from '../../../const';
import CityList from '../../elements/city-list/city-list';
import SortList from '../../elements/sort-list/sort-list';
import {sortOffers} from '../../../utils/sort';
import Empty from '../../elements/empty/empty';
import Header from '../../elements/header/header';
import {getCity, getSortType, getActiveOffer} from '../../../store/work-process/selectors';
import {getOffers, getIsOffersDataLoaded} from '../../../store/data/selectors';

function Main() {
  const city = useSelector(getCity);
  const allOffers = useSelector(getOffers);
  const activeOffer = useSelector(getActiveOffer);
  const isOffersDataLoaded = useSelector(getIsOffersDataLoaded);
  const sortType = useSelector(getSortType).name;

  const offers = useMemo(() => sortOffers(allOffers, sortType, city), [allOffers, sortType, city]);

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
              !isEmpty && isOffersDataLoaded
                ? <Empty city={city}/>
                : (
                  <>
                    <section className="cities__places places">
                      <h2 className="visually-hidden">Places</h2>
                      <b className="places__found">
                        {
                          isOffersDataLoaded
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

export default React.memo(Main);
