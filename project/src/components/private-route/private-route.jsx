import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {AppRoute, AuthorizationStatus} from '../../const';


function PrivateRoute({render, path, exact, isPrivet = true}) {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
  const getRenderComponent = (route) => {
    if (isPrivet) {
      return isAuth ? render(route) : <Redirect to={AppRoute.LOGIN} />;
    }
    return isAuth ? <Redirect to={AppRoute.ROOT} /> : render(route);
  };

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        getRenderComponent(routeProps)
      )}
    />
  );
}

PrivateRoute.propTypes = {
  isPrivet: PropTypes.bool,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
