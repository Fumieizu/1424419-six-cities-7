import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../elements/header/header';

function NotFoundScreen () {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index page__main--index-empty">
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">404. Page not found</b>
                <p className="cities__status-description">The page you are looking for does not exist.</p>
                <Link to="/" style={{}}>
                  Go on Main
                </Link>
              </div>
            </section>
            <div className="cities__right-section"/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
