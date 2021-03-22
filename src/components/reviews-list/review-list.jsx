import React from 'react';
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ReviewsListItem from "../reviews-list-item/review-list-item";
import {ReviewProps} from "../../types/review-props";
import AddCommentForm from "../add-comment-form/add-comment-form";


const ReviewsList = ({reviews, propertyId}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewsListItem
          comment={review.comment}
          date={review.date}
          id={review.id}
          key={`review_item_` + review.id}
          rating={review.rating}
          user={review.user}
        />)}
      </ul>
      <AddCommentForm/>
    </section>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(ReviewProps)),
  propertyId: PropTypes.number.isRequired
};


const mapStateToProps = (state) => {
  return {
    reviews: state.reviews,
    propertyId: state.propertyId
  };
};


export {ReviewsList};
export default connect(mapStateToProps)(ReviewsList);
