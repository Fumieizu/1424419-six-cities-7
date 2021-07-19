import React from 'react';
import Main from '../pages/main/main';
import {Switch, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Favorites from '../pages/favorites/favorites';
import RoomWrapper from '../elements/room-wrapper/room-wrapper';
import AuthScreen from '../pages/auth-screen/auth-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../elements/private-route/private-route';
import {useSelector} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors';

function App() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <Main/>
      </Route>
      <PrivateRoute
        exact
        path={AppRoute.FAVORITES}
        redirectPath={AppRoute.LOGIN}
        isAuth={authorizationStatus === AuthorizationStatus.AUTH}
        render={() => <Favorites />}
      />
      <PrivateRoute
        exact
        path={AppRoute.LOGIN}
        redirectPath={AppRoute.ROOT}
        isAuth={authorizationStatus !== AuthorizationStatus.AUTH}
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
