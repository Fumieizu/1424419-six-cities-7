import React from 'react';
import PropTypes from 'prop-types';
import reviewProp from '../review/review-prop';
import Review from '../review/review';
import {getDiffDate} from '../../../utils/date';

const REVIEWS_MAX_COUNT = 10;

const getSortedReviewsByDate = (reviews) => {
  const sortedReviews = reviews.slice()
    .sort((a, b) => getDiffDate(b.date, a.date));

  if (sortedReviews.length > REVIEWS_MAX_COUNT) {
    return sortedReviews.slice(0, REVIEWS_MAX_COUNT);
  }

  return sortedReviews;
};

function ReviewList({reviews}) {
  const sortedReviews = getSortedReviewsByDate(reviews);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{sortedReviews.length}</span></h2>
      <ul className="reviews__list">
        {
          sortedReviews.map((review) => (
            <Review
              key={review.id.toString()}
              review={review}
            />
          ))
        }
      </ul>
    </>
  );
}

ReviewList.propTypes = {
  reviews:  PropTypes.arrayOf(
    PropTypes.oneOfType([reviewProp]).isRequired,
  ),
};

export default ReviewList;
