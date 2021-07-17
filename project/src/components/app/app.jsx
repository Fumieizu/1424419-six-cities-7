import React from 'react';
import Main from '../pages/main/main';
import {Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import Favorites from '../pages/favorites/favorites';
import RoomWrapper from '../elements/room-wrapper/room-wrapper';
import AuthScreen from '../pages/auth-screen/auth-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../elements/private-route/private-route';

function App() {
  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <Main/>
      </Route>
      <PrivateRoute exact path={AppRoute.FAVORITES}
        render={() => <Favorites />}
      />
      <PrivateRoute exact path={AppRoute.LOGIN} isPrivet={false}
        render={() => <AuthScreen/>}
      />
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
  );
}


export default App;
