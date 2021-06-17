import React, {useState} from 'react';
import RoomRatingElement from '../room-rating-element/room-rating-element';

const RatingTitle = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};

function RoomReviewsForm() {
  const [form, setForm] = useState({ratingValue:null, comment:''});
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(evt) =>
    {evt.preventDefault();

    }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          Object.keys(RatingTitle).sort((a,b) => b - a).map((value) => (
            <RoomRatingElement
              key={value}
              value={value}
              title={RatingTitle[value]}
              onChangeHandler={(target) => setForm({
                ...form,
                ratingValue: target.value,
              })}
            />
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        value={form.comment}
        onChange={(target) =>
          setForm({
            ...form,
            comment: target.value,
          })}
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

export default RoomReviewsForm;
