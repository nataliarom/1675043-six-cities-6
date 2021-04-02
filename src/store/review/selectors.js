import {createSelector} from "reselect";

export const getReviews = (state) => state.reviews;
export const getReviewsCount = (state) => state.reviews.length;

const sortReviewsByDate = (review1, review2) => {
  return Date.parse(review2.date) - Date.parse(review1.date);
};

export const getTop10NewReviews = createSelector(getReviews, (reviews)=> [...reviews.sort(sortReviewsByDate)].slice(0, 10));

