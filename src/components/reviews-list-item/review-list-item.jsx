import {ReviewProps} from "../../types/review-props";
import React from 'react';

export const getReviewDateString = (date) => {
  try {
    let d = new Date(date);
    const months = [`January`, `February`, `March`, `April`, `May`, `Jun`, `July`, `August`, `September`, `October`, `November`, `December`];
    return months[d.getMonth()] + ` ` + d.getFullYear();
  } catch (e) {
    return ``;
  }
};

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
            <span style={{width: `${rating * 20}%`}} />
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

ReviewsListItem.propTypes = ReviewProps;
