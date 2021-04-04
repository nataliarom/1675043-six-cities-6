import {APIRoute} from "../../const";
import {createCommentFromApi, createErrorFromResponse} from "../../utils";
import {loadReviews, setReviewError, setReviewSuccess} from "./action";
import {setApplicationError} from "../user/action";
import {processUnauthorisedError} from "../user/api-action";

export const fetchReviews = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}${offerId}`)
    .then(({data}) => {
      dispatch(loadReviews(data.map((comment) => (createCommentFromApi(comment)))));
    }).catch((data) => {
      let error = createErrorFromResponse(data.response);
      if (error.isTimeout) {
        dispatch(setApplicationError(error));
      }
    })
);

export const addComment = ({comment: comment, rating: rating, offerId: offerId}) => (dispatch, _getState, api) => (
  api.post((`${APIRoute.COMMENTS}${offerId}`), {comment, rating})
    .then(({data}) => {
      dispatch(loadReviews(data.map((newComment) => (createCommentFromApi(newComment)))));
      dispatch(setReviewSuccess());
    }).catch((data) => {
      let error = createErrorFromResponse(data.response);
      if (error.isTimeout) {
        dispatch(setApplicationError(error));
        return;
      }
      if (error.isUnauthorized) {
        dispatch(processUnauthorisedError());
        return;
      }
      dispatch(setReviewError(error));
    })
);
