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
  PARIS: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 12,
    },
  },
  COLOGNE: {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 12,
    },
  },
  BRUSSELS: {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 12,
    },
  },
  AMSTERDAM: {
    name: 'Amsterdam',
    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 12,
    },
  },
  HAMBURG: {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 12,
    },
  },
  DUSSELDORF: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 12,
    },
  },
};

const SortType = {
  DEFAULT: {
    name: 'default',
    text: 'Popular',
  },
  LOW_TO_HIGH: {
    name: 'lowPrice',
    text: 'Price: low to high',
  },
  HIGH_TO_LOW: {
    name: 'highPrice',
    text: 'Price: high to low',
  },
  TOP_RATED: {
    name: 'topRated',
    text: 'Top rated first',
  },
};

const DateFormat = {
  DEFAULT: 'YYYY-MM-DD',
  HUMANIZE: 'MMMM YYYY',
};

const CustomPin = {
  DEFAULT: {
    iconUrl: 'img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  },
  ACTIVE: {
    iconUrl: 'img/pin-active.svg',
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  },
};

export {AppRoute, OfferType, CardType, Cities, DateFormat, SortType, CustomPin};
