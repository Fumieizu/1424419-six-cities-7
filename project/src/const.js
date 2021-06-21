const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer',
};

const OfferType = {
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
  hotel: 'Hotel',
};

const CardType = {
  FAVORITES: 'favorites',
  CITIES: 'cities',
  NEAR_PLACES: 'near-places',
};

const Cities = {
  AMSTERDAM: {
    name: 'Amsterdam',
    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 12,
    },
  },
};

const DateFormat = {
  DEFAULT: 'YYYY-MM-DD',
  HUMANIZE: 'MMMM YYYY',
};

export {AppRoute, OfferType, CardType, Cities, DateFormat};
