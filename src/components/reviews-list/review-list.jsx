import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ReviewsListItem from "../reviews-list-item/review-list-item";
import {ReviewProps} from "../../types/review-props";
import AddCommentForm from "../add-comment-form/add-comment-form";
import {AuthorizationStatus} from "../../const";


const ReviewsList = ({authorizationStatus, reviews, offerId}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews && reviews.length}</span></h2>
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
  authorizationStatus: PropTypes.string.isRequired,
  offerId: PropTypes.number.isRequired
};

// TODO Sort reviews by date, newest on top
const mapStateToProps = ({REVIEW, USER, HOTEL}) => {
  return {
    reviews: REVIEW.reviews.slice(0, 10),
    authorizationStatus: USER.authorizationStatus,
    offerId: HOTEL.openedOffer.id
  };
};


export {ReviewsList};
export default connect(mapStateToProps)(ReviewsList);
