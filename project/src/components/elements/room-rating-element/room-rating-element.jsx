import React from 'react';
import PropTypes from 'prop-types';

function RoomRatingElement({title, value, onChangeHandler, rating, isDisabled}) {
  return (
    <React.Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        onChange={onChangeHandler}
        checked={rating === value}
        disabled={isDisabled}
      />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>
    </React.Fragment>
  );
}

RoomRatingElement.propTypes = {
  rating: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default RoomRatingElement;

