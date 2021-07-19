import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import Favorites from './favorites';

jest.mock('../../elements/header/header', () => ({
  __esModule: true,
  default() {
    return <div>This is mock Header</div>;
  },
}));

const history = createMemoryHistory();
const mockStore  = configureStore();
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
  isFavorite: true,
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

describe('Component: Favorites', () => {
  it('should render correctly', () => {
    const storeFakeData = {
      DATA: {
        favorites: [offer],
        isFavoritesDataLoaded: true,
      },
    };

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={mockStore(storeFakeData)}>
        <Router history={history}>
          <Favorites />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/This is mock Header/i)).toBeInTheDocument();
    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
    expect(dispatch).toBeCalled();
  });

  it('should render correctly without offers', () => {
    const storeFakeData = {
      DATA: {
        favorites: [],
        isFavoritesDataLoaded: true,
      },
    };

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={mockStore(storeFakeData)}>
        <Router history={history}>
          <Favorites />
        </Router>
      </Provider>,
    );

    expect(screen.getByRole('main')).toHaveClass('page__main--favorites-empty page__main page__main--favorites', {exact: true});
  });
});
