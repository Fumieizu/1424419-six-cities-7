import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import Favorites from '../pages/favorites/favorites';
import Room from '../pages/room/room';
import SignIn from '../pages/sign-in/sign-in';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import offerProp from '../offers/offer-card/offer-card.prop';
import reviewProp from '../pages/room/review/review-prop';


function App({offers, reviews}) {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main/>
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites/>
        </Route>
        <Route exect path={AppRoute.LOGIN}>
          <SignIn/>
        </Route>
        <Route exact path={`${AppRoute.OFFER}/:id`}
          render={(props) => {
            const offer = offers.find(({id}) => id.toString() === props.match.params.id);
            return <Room filteredOffer={offer} offers={offers} reviews={reviews}/>;
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

export default App;
