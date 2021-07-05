import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../const';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import SignIn from '../sign-in/sign-in';
import SignOut from '../sign-out/sign-out';

function Header({authorizationStatus, userEmail}) {
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.ROOT}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                isAuth
                  ? <SignOut userEmail={userEmail}/>
                  : <SignIn/>
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userEmail: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  userEmail: state.userEmail,
});

export {Header};
export default connect(mapStateToProps)(Header);
