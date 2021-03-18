

export const CITIES = [
  {
    name: `Paris`,
    location: {latitude: 48.85661, longitude: 2.351499, zoom: 13}
  },
  {
    name: `Cologne`,
    location: {latitude: 50.938361, longitude: 6.959974, zoom: 13}
  },
  {
    name: `Brussels`,
    location:
    {latitude: 50.846557, longitude: 4.351697, zoom: 13}
  },
  {
    name: `Amsterdam`,
    location: {latitude: 52.37454, longitude: 4.897976, zoom: 13}
  },
  {
    name: `Hamburg`,
    location: {latitude: 53.550341, longitude: 10.000654, zoom: 13}
  },
  {
    name: `Dusseldorf`,
    location: {latitude: 51.225402, longitude: 6.776314, zoom: 13}
  }];

export const DEFAULT_CITY = CITIES[0];

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`,
  ROOT: `/`,
};

export const APIRoute = {
  HOTELS: `/hotels`,
  LOGIN: `/login`,
};
