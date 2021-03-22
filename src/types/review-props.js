import {number, string, bool, shape} from 'prop-types';

export const ReviewProps = {

  comment: string.isRequired,
  date: string.isRequired,
  id: number.isRequired,
  rating: number.isRequired,
  user: shape({
    avatarUrl: string.isRequired,
    id: number.isRequired,
    isPro: bool.isRequired,
    name: string.isRequired,
  })
};
