import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import FavoritesList from '../../elements/favorites-list/favorites-list';
import FavoritesEmpty from '../../elements/favorites-empty/favorites-empty';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../../elements/header/header';
import LoadingScreen from '../../elements/loading-screen/LoadingScreen';
import {getFavorites, getIsFavoritesDataLoaded} from '../../../store/data/selectors';
import {fetchFavoritesList} from '../../../store/api-actions';

function Favorites() {
  const dispatch = useDispatch();
  const offers = useSelector(getFavorites);
  const isLoad = useSelector(getIsFavoritesDataLoaded);
  const isEmpty = offers.length === 0;

  useEffect(() => {
    dispatch(fetchFavoritesList());
  }, [dispatch]);

  if (!isLoad) {
    return <LoadingScreen/>;
  }

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

export default Favorites;
