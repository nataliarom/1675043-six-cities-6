export const ReviewActionType = {
  LOAD_REVIEWS: `comment/load`,
  SET_REVIEW_ERROR: `comment/setError`,
  SET_REVIEW_SUCCESS: `comment/setSuccess`,
};

export const loadReviews = (reviews) => ({
  type: ReviewActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const setReviewError = (error) => ({
  type: ReviewActionType.SET_REVIEW_ERROR,
  payload: error,
});
export const setReviewSuccess = () => ({
  type: ReviewActionType.SET_REVIEW_SUCCESS,
});
