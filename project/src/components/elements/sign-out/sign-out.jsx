import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {AppRoute} from '../../../const';
import {logout} from '../../../store/api-actions';
import {getUser} from '../../../store/user/selectors';


function SignOut({userEmail}) {
  const dispatch = useDispatch();
  const userAvatar = useSelector(getUser).avatarUrl;
  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img style={{ borderRadius: '50%' }} src={userAvatar} alt={'user'} />
          </div>
          <span className="header__user-name user__name">{userEmail}</span>
        </Link>
      </li>
      <li
        className="header__nav-item"
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(logout());
        }}
      >
        <Link to="#" className="header__nav-link">
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}

SignOut.propTypes = {
  userEmail: PropTypes.string,
};

export default SignOut;
