import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import Room from './room';

const history = createMemoryHistory();
const mockStore = configureStore();
const storeFakeData = {
  USER: {
    authorizationStatus: 'NO_AUTH',
  },
};

jest.mock('../../elements/offers-list/offers-list', () => ({
  __esModule: true,
  default() {
    return <div>This is the mock Offers</div>;
  },
}));

jest.mock('../../elements/offer-card/offer-card', () => ({
  __esModule: true,
  default() {
    return <div>This is the mock Offer</div>;
  },
}));

jest.mock('../../elements/review/review', () => ({
  __esModule: true,
  default() {
    return <div>This is the mock Review</div>;
  },
}));

jest.mock('../../elements/review-list/review-list', () => ({
  __esModule: true,
  default() {
    return <div>This is the mock review-list</div>;
  },
}));

jest.mock('../../elements/map/map', () => ({
  __esModule: true,
  default() {
    return <div>This is the mock map</div>;
  },
}));

jest.mock('../../elements/header/header', () => ({
  __esModule: true,
  default() {
    return <div>This is the mock Header</div>;
  },
}));

const offer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description:
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: [
    'Heating',
    'Kitchen',
    'Cable TV',
    'Washing machine',
    'Coffee machine',
    'Dishwasher',
  ],
  host: {
    avatarUrl: 'img/test.png',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/test.png'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/test.png',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
};

describe('Component: Room', () => {
  it('should render correctly', () => {
    render(
      <Provider store={mockStore(storeFakeData)}>
        <Router history={history}>
          <Room offer={offer}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('This is the mock review-list')).toBeInTheDocument();
    expect(screen.getByText('This is the mock map')).toBeInTheDocument();
    expect(screen.getByText('This is the mock Offers')).toBeInTheDocument();
  });
});
