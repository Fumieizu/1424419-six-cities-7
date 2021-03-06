import React from 'react';
import reviewProp from './review-prop';
import {getRatingPercentage} from '../../../utils/common';
import {getFormatDate} from '../../../utils/date';
import {DateFormat} from '../../../const';

function Review({review}) {
  const {user, rating, date, comment} = review;
  const {avatarUrl, name} = user;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getRatingPercentage(rating)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={getFormatDate(date, DateFormat.DEFAULT)}>{getFormatDate(date, DateFormat.HUMANIZE)}</time>
      </div>
    </li>
  );
}

Review.propTypes = {
  review: reviewProp,
};

export default Review;
