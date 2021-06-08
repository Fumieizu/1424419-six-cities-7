import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import SignIn from '../sign-in/sign-in';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const OFFER_ID = 'id';

function App({placeCount}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main placeCount={placeCount} />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites/>
        </Route>
        <Route exect path={AppRoute.LOGIN}>
          <SignIn/>
        </Route>
        <Route exact path={`${AppRoute.OFFER}/:${OFFER_ID}`} component={Room}/>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  placeCount: PropTypes.number.isRequired,
};

export default App;
