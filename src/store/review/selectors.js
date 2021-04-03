import {createSelector} from "reselect";
import {sortReviewsByDate} from "../../utils";
import {MAX_REVIEW_LIST_SIZE} from "../../const";

export const getReviews = (state) => state.reviews;
export const getReviewsCount = (state) => state.reviews.length;


export const getTopNewReviews = createSelector(getReviews, (reviews)=> [...reviews.sort(sortReviewsByDate)].slice(0, MAX_REVIEW_LIST_SIZE));

