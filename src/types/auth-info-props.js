import {number, string, bool} from 'prop-types';

export const AuthInfoProps = {
  email: string.isRequired,
  id: number.isRequired,
  name: string.isRequired,
  avatarUrl: string,
  isPro: bool,
};
