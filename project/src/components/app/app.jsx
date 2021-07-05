import React from 'react';
import {connect} from 'react-redux';
import Main from '../main/main';
import PropTypes from 'prop-types';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import Favorites from '../pages/favorites/favorites';
import Room from '../pages/room/room';
import AuthScreen from '../pages/auth-screen/auth-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import offerProp from '../offers/offer-card/offer-card.prop';
import reviewProp from '../pages/room/review/review-prop';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../services/browser-history';


function App({offers, reviews}) {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main/>
        </Route>
        <PrivateRoute exact path={AppRoute.FAVORITES}
          render={() => <Favorites />}
        />
        <Route exect path={AppRoute.LOGIN}>
          <AuthScreen/>
        </Route>
        <Route exact path={`${AppRoute.OFFER}/:id`}
          render = {({match}) => {
            const {id} = match.params;
            const [filteredOffer] = offers.filter((offer) => offer.id === Number(id));
            return <Room filteredOffer = {filteredOffer} offers = {offers} reviews = {reviews} />;
          }}
        />
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([offerProp]).isRequired,
  ),
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
  reviews: PropTypes.arrayOf(
    PropTypes.oneOfType([reviewProp]).isRequired,
  ),
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  reviews: state.reviews,
});

export default connect(mapStateToProps)(App);
