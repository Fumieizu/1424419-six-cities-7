import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeCity} from '../../../store/action';
import City from '../city/city';
import {getCities, getCity} from '../../../store/work-process/selectors';

function CityList() {
  const dispatch = useDispatch();
  const activeCity = useSelector(getCity);
  const cities = useSelector(getCities);
  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((item) => (
          <City
            key={item.name}
            isActive={item.name === activeCity}
            name={item.name}
            onClick={(payload) => dispatch(changeCity(payload))}
          />
        ))
      }
    </ul>
  );
}

export default React.memo(CityList);

