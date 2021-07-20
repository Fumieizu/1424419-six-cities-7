import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import Main from './main';

jest.mock('../../elements/header/header', () => ({
  __esModule: true,
  default() {
    return <div>This is the mock Header</div>;
  },
}));

jest.mock('../../elements/city-list/city-list', () => ({
  __esModule: true,
  default() {
    return <div>This is the mock CityList</div>;
  },
}));

jest.mock('../../elements/offers-list/offers-list', () => ({
  __esModule: true,
  default() {
    return <div>This is the mock OffersList</div>;
  },
}));

jest.mock('../../elements/sort-list/sort-list', () => ({
  __esModule: true,
  default() {
    return <div>This is the mock SortList</div>;
  },
}));

jest.mock('../../elements/map/map', () => ({
  __esModule: true,
  default() {
    return <div>This is the mock Map</div>;
  },
}));

jest.mock('../../elements/empty/empty', () => ({
  __esModule: true,
  default() {
    return <div>This is the mock Empty</div>;
  },
}));

const history = createMemoryHistory();
const mockStore = configureStore();
const offers = [
  {id: 1, city: {name: 'Paris'}},
  {id: 2, city: {name: 'Paris'}},
  {id: 3, city: {name: 'Paris'}},
];

describe('Component: Main', () => {
  it('should render correctly', () => {
    const storeFakeData = {
      DATA: {
        offers: offers,
        isOffersDataLoaded: true,
      },
      PROCESS: {
        city: 'Paris',
        sortType: {name: 'default', text: 'Popular'},
        activeOffer: offers[0].id,
      },
    };

    render(
      <Provider store={mockStore(storeFakeData)}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('This is the mock Header')).toBeInTheDocument();
    expect(screen.getByText('This is the mock CityList')).toBeInTheDocument();
    expect(screen.getByText('This is the mock SortList')).toBeInTheDocument();
    expect(screen.getByText('This is the mock OffersList')).toBeInTheDocument();
    expect(screen.getByText('This is the mock Map')).toBeInTheDocument();
  });

  it('should render correctly without offers', () => {
    const storeFakeData = {
      DATA: {
        offers: [],
        isOffersDataLoaded: true,
      },
      PROCESS: {
        city: 'Paris',
        sortType: {name: 'default', text: 'Popular'},
        activeOffer: null,
      },
    };

    render(
      <Provider store={mockStore(storeFakeData)}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('This is the mock Header')).toBeInTheDocument();
    expect(screen.getByText('This is the mock Empty')).toBeInTheDocument();
  });
});
