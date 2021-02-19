import {number, string} from 'prop-types';

export const FavoriteOfferCardProps = {
  title: string.isRequired,
  price: number.isRequired,
  previewImage: string.isRequired,
  type: string.isRequired,
  id: number.isRequired,
  rating: number.isRequired
};
