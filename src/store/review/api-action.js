import {APIRoute} from "../../const";
import {createCommentFromApi} from "../../utils";
import {loadReviews, setReviewError, setReviewSuccess} from "./action";

export const fetchReviews = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}${offerId}`)
    .then(({data}) => {
      dispatch(loadReviews(data.map((comment) => (createCommentFromApi(comment)))));
    }).catch(() => {})
);

export const addComment = ({comment: comment, rating: rating, offerId: offerId}) => (dispatch, _getState, api) => (
  api.post((`${APIRoute.COMMENTS}${offerId}`), {comment, rating})
    .then(({data}) => {
      dispatch(loadReviews(data.map((newComment) => (createCommentFromApi(newComment)))));
      dispatch(setReviewSuccess());
    }).catch((data) => {
      dispatch(setReviewError(data.response.data.error));
    })
);
