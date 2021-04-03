
export const createHotelFromApi = (hotel) => {
  return {
    bedrooms: hotel.bedrooms,
    city: {
      location: {
        latitude: hotel.city.location.latitude,
        longitude: hotel.city.location.longitude,
        zoom: hotel.city.location.zoom,
      },
      name: hotel.city.name
    },
    description: hotel.description,
    goods: hotel.goods,
    host: {
      avatarUrl: hotel.host.avatar_url,
      id: hotel.host.id,
      isPro: hotel.host.is_pro,
      name: hotel.host.name
    },
    id: hotel.id,
    images: hotel.images,
    isFavorite: hotel.is_favorite,
    isPremium: hotel.is_premium,
    location: {
      latitude: hotel.location.latitude,
      longitude: hotel.location.longitude,
      zoom: hotel.location.zoom
    },
    maxAdults: hotel.max_adults,
    previewImage: hotel.preview_image,
    price: hotel.price,
    rating: Math.round(hotel.rating),
    title: hotel.title,
    type: `${hotel.type.charAt(0).toUpperCase()}${hotel.type.substr(1).toLowerCase()}`,
  };
};

export const createCommentFromApi = (comment) => {
  return {
    comment: comment.comment,
    date: comment.date,
    id: comment.id,
    rating: comment.rating,
    user: {
      avatarUrl: comment.user.avatar_url,
      id: comment.user.id,
      isPro: comment.user.is_pro,
      name: comment.user.name
    }
  };
};
export const createAuthInfoFromApi = (authInfo) => {
  return {
    avatarUrl: authInfo.avatar_url,
    email: authInfo.email,
    id: authInfo.id,
    isPro: authInfo.is_pro,
    name: authInfo.name
  };
};


export const getCitiesFromHotelsList = (hotels) => {
  let cities = [];
  hotels.forEach((offer)=> {
    if (cities.findIndex((city) => city.name === offer.city.name) < 0) {
      cities.push(offer.city);
    }
  });
  return cities;
};

export const getOffersByCity = (city, hotels) => {
  return hotels.filter((hotel) => {
    return hotel.city.name === city.name;
  });
};

export const sortReviewsByDate = (review1, review2) => {
  return Date.parse(review2.date) - Date.parse(review1.date);
};

export const getReviewDateString = (date) => {
  let dateValue = new Date(date);
  const month = dateValue.toLocaleString(`default`, {month: `long`});
  return `${month} ${dateValue.getFullYear()}`;
};
