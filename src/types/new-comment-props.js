import {number, string} from 'prop-types';

export const NewCommentProps =
  {
    comment: string.isRequired,
    rating: number.isRequired
  };
