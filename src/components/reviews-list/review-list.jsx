import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ReviewsListItem from "../reviews-list-item/review-list-item";
import {ReviewProps} from "../../types/review-props";
import AddCommentForm from "../add-comment-form/add-comment-form";
import {AuthorizationStatus} from "../../const";
import {getReviewsCount, getTop10NewReviews} from "../../store/review/selectors";


const ReviewsList = ({authorizationStatus, reviews, offerId, reviewsCount}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ul className="reviews__list">
        {reviews && reviews.map((review) => <ReviewsListItem
          comment={review.comment}
          date={review.date}
          id={review.id}
          key={`review_item_` + review.id}
          rating={review.rating}
          user={review.user}
        />)}
      </ul>

      {authorizationStatus === AuthorizationStatus.AUTH ? <AddCommentForm offerId={offerId}/> : ``}
    </section>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(ReviewProps)),
  authorizationStatus: PropTypes.oneOf([AuthorizationStatus.NO_AUTH, AuthorizationStatus.AUTH]).isRequired,
  offerId: PropTypes.number.isRequired,
  reviewsCount: PropTypes.number.isRequired,
};

const mapStateToProps = ({REVIEW, USER, HOTEL}) => {
  return {
    reviews: getTop10NewReviews(REVIEW),
    authorizationStatus: USER.authorizationStatus,
    offerId: HOTEL.openedOffer.id,
    reviewsCount: getReviewsCount(REVIEW)
  };
};


export {ReviewsList};
export default connect(mapStateToProps)(ReviewsList);
