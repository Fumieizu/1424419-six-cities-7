import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppRoute } from '../../../const';

function City({isActive, name, onClick}) {
  return (
    <li className="locations__item">
      <Link
        className={`${isActive ? 'tabs__item--active' : ''} locations__item-link tabs__item`}
        to={AppRoute.ROOT}
        onClick={() => onClick(name)}
      >
        <span>{name}</span>
      </Link>
    </li>
  );
}

City.propTypes = {
  isActive: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default City;
