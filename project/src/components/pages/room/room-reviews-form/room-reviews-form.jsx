import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createComment} from '../../../../store/api-actions';
import RoomRatingElement from '../room-rating-element/room-rating-element';

const RatingTitle = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};

function RoomReviewsForm({id, sendComment}) {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    sendComment(id,{
      comment: comment,
      rating: rating,
    });
    setRating('');
    setComment('');
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmitHandler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          Object.keys(RatingTitle).sort((a,b) => b - a).map((value) => (
            <RoomRatingElement
              key={value}
              value={value}
              title={RatingTitle[value]}
              rating={rating}
              onChangeHandler={({target}) => setRating(target.value)}
            />
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        onChange={({target}) => setComment(target.value)}
        value={comment}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
}

RoomReviewsForm.propTypes = {
  id: PropTypes.number,
  sendComment: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  sendComment(...data) {
    dispatch(createComment(...data));
  },
});

export default connect(null, mapDispatchToProps)(RoomReviewsForm);
