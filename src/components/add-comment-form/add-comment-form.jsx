import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addComment, checkAuth} from "../../store/api-actions";


const AddCommentForm = ({offerId, onSubmit, error, isSaved}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState(``);
  const [isSaving, setIsSaving] = useState(false);

  const validate = ()=> {
    return rating <= 5 && rating > 0 && comment.length <= 300 && comment.length >= 50;
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsSaving(true);
    onSubmit({
      comment,
      rating,
      offerId
    });
  };

  useEffect(() => {

    if (isSaving && error) {
      setIsSaving(false);
    }
    if (isSaving && isSaved) {
      setRating(0);
      setComment(``);
      setIsSaving(false);
    }
  }, [error, isSaved]);


  const handleRatingChange = (evt) => {
    const {value} = evt.target;
    setRating(parseInt(value, 10));
  };
  const handleCommentChange = (evt) => {
    const {value} = evt.target;
    setComment(value);
  };
  return (

    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((v)=>(
          <React.Fragment key={`rating-${v}`}>
            <input disabled={isSaving} className="form__rating-input visually-hidden" checked={rating === v} name="rating" value={v} id={`${v}-stars`} type="radio"
              onChange={handleRatingChange}/>
            <label htmlFor={`${v}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea disabled={isSaving} className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleCommentChange} maxLength="300" minLength="50" value={comment}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and
            describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!validate() || isSaving}>Submit</button>
      </div>
    </form>

  );
};
AddCommentForm.propTypes = {
  offerId: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isSaved: PropTypes.bool.isRequired,
  error: PropTypes.object,
};
const mapStateToProps = ({REVIEW}) => {
  return {
    isSaved: REVIEW.reviewSaved,
    error: REVIEW.reviewError,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(commentData) {
    dispatch(checkAuth());
    dispatch(addComment(commentData));
  }
});


export {AddCommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(AddCommentForm);
