import React from 'react';
import PropTypes from 'prop-types';

function RoomRatingElement({title, value, onChangeHandler}) {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" onChange={onChangeHandler}/>
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>
    </>
  );
}

RoomRatingElement.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default RoomRatingElement;
