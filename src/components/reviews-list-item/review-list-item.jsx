import {ReviewType} from "../../types/review-type";
import React from 'react';
import {getReviewDateString} from "../../utils";
import {RATING_STAR_WIDTH} from "../../const";


const ReviewsListItem = ({comment, date, rating, user}) => {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user && user.avatarUrl} width="54" height="54"
            alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user && user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * RATING_STAR_WIDTH}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{getReviewDateString(date)}</time>
      </div>
    </li>
  );
};


export default ReviewsListItem;

ReviewsListItem.propTypes = ReviewType;
