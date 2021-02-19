import {number, string, bool} from 'prop-types';

export const OfferCardProps = {
  title: string.isRequired,
  price: number.isRequired,
  isPremium: bool.isRequired,
  previewImage: string.isRequired,
  type: string.isRequired,
  id: number.isRequired,
  rating: number.isRequired,
  isFavorite: bool.isRequired,
};
