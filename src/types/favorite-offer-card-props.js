import {number, string} from 'prop-types';

export const FavoriteOfferCardProps = {
  title: string.isRequired,
  price: number.isRequired,
  previewImage: string,
  type: string.isRequired,
  id: number.isRequired,
  rating: number.isRequired
};
