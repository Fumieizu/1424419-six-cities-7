import React from 'react';
import Main from '../main/main';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import Favorites from '../pages/favorites/favorites';
import RoomWrapper from '../pages/room/room-wrapper/room-wrapper';
import AuthScreen from '../pages/auth-screen/auth-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../services/browser-history';


function App() {

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
            return <RoomWrapper offerId = {id} />;
          }}
        />
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
