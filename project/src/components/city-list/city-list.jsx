import React from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import PropTypes from 'prop-types';
import City from '../city/city';
import cityProp from '../city/city.prop';

function CityList({cities, city, onClick}) {
  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((item) => (
          <City
            key={item.name}
            isActive={item.name === city}
            name={item.name}
            onClick={onClick}
          />
        ))
      }
    </ul>
  );
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(cityProp),
  city: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape(cityProp),
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  cities: state.cities,
});

const mapDispatchToProps = (dispatch) => ({
  onClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {CityList};
export default connect(mapStateToProps, mapDispatchToProps)(CityList);

